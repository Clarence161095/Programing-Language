using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Text.RegularExpressions;
using System.Threading.Tasks;

namespace Regex_jlptvietnam
{
    class CrawlData
    {
        HttpClient httpClient;
        HttpClientHandler handler;
        CookieContainer cookie = new CookieContainer();
        string HomePage = "https://jlptvietnam.com/danh-sach-ngu-phap-tieng-nhat/";
        int i = 0;

        #region methods

        public void CrawDataMain()
        {
            IniHttpClient();
            Console.OutputEncoding = System.Text.Encoding.UTF8;
            Console.Title = "Tool get grammar (author TuanNA)";

            List<string> pathPages = new List<string>
            {
                "",
                "page/2/",
                "page/3/",
                "page/4/",
                "page/5/",
                "page/6/"
            };
            List<Grammar> grammars = new List<Grammar>();
            
            foreach (var path in pathPages)
            {
                string htmlGrammarPage = CrawlDataFromURL(HomePage + path);
                var grammarListTemp = Regex.Matches(htmlGrammarPage, @"<tr class=""jl-row"">(.*?)</a></td></tr>");
                foreach (var grammar in grammarListTemp)
                {
                    string name = Regex.Match(grammar.ToString(), @"title=""(.*?)""").Value
                        .Replace("title=\"Học Ngữ Pháp JLPT ", "")
                        .Replace("title=\"Ngữ Pháp ", "")
                        .Replace("\"", "");

                    string level = Regex.Match(name.ToString(), @".*?: ").Value
                        .Replace(": ", "");

                    string description = Regex.Match(
                        Regex.Match(grammar.ToString(), @"</a></td><td class=""jl-td-gm align-middle""> .*").Value.ToString(),
                        @"middle""> (.*?)<").Value
                        .Replace("middle\"> ", "")
                        .Replace("<", "");

                    string link = Regex.Match(grammar.ToString(), @"href=""(.*?)/""").Value;

                    string detailPage = getDetailPage(link);

                    var sentence = getDetailGrammar(detailPage);

                    var meaning = getDetailGrammarMeaning(detailPage);

                    var use = getDetailGrammarUse(detailPage);

                    var gram = new Grammar(name, level, description, link, sentence, meaning, use);

                    Console.WriteLine("----------------------###----------------------");
                    Console.WriteLine();
                    Console.WriteLine("No." + i++);
                    Console.WriteLine("Level: " + gram.level);
                    Console.WriteLine("Name: " + gram.name);
                    Console.WriteLine("Description: " + gram.description);
                    Console.WriteLine("Meaning: ");
                    foreach (var mean in gram.meaning)
                    {
                        Console.WriteLine(mean);
                    }
                    Console.WriteLine("How to use: ");
                    foreach (var u in gram.use)
                    {
                        Console.WriteLine(u);
                    }
                    Console.WriteLine("Example: ");
                    int p = 1;
                    foreach (var sen in gram.sentence)
                    {
                        Console.WriteLine("VD " + p++ + ":");
                        Console.WriteLine(sen.reibunJA);
                        Console.WriteLine(sen.reibunVN);
                        Console.WriteLine(sen.reibunRO);
                    }
                    Console.WriteLine();
                    Console.WriteLine();

                    WriteTempNone(gram);

                    WriteTempWithLevel(gram);

                    WriteJson(gram);

                    grammars.Add(gram);
                }
            }

            Console.ReadKey();
        }

        private List<string> getDetailGrammarUse(string htmlDetailGrammarPage)
        {
            MatchCollection useList = Regex.Matches(htmlDetailGrammarPage, @"(<p class=""tsukaikata-setsumei"">)(.*?)(<\/p>)");
            List<string> useReturn = new List<string>();
            foreach (Match use in useList)
            {
                if (Regex.Matches(use.Groups[2].Value.ToString(), @"(.*?<br>)|(.*)").Count > 0)
                {
                    foreach (Match m in Regex.Matches(use.Groups[2].Value.ToString(), @"(.*?<br>)|(.*)"))
                    {
                        useReturn.Add(m.Value.ToString()
                            .Replace("<span class=\"iro\">", "")
                            .Replace("</span>)", "")
                            .Replace("</span>", "")
                            .Replace("<s>", "")
                            .Replace("</s>", "")
                            .Replace("<rb>", "")
                            .Replace("<rp>", "")
                            .Replace("</rp>", "")
                            .Replace("<ruby>", "")
                            .Replace("</ruby>", "")
                            .Replace("</rb>", "")
                            .Replace("</rb>", "")
                            .Replace("(</rp>", "")
                            .Replace("<rp>)", "")
                            .Replace("<rt>", "")
                            .Replace("</rt>", "")
                            .Replace("<br>", "")
                            .Replace("br", "")
                            .Replace("<", "")
                            .Replace(">", "")
                            .Replace("(", "")
                            .Replace(")", "")
                            .ToString());
                    }
                }
                else
                {
                    useReturn.Add(use.Groups[2].Value.ToString());
                }
            }

            return useReturn;
        }

        private List<string> getDetailGrammarMeaning(string htmlDetailGrammarPage)
        {
            MatchCollection meaningList = Regex.Matches(htmlDetailGrammarPage, @"(<p class=""imi-setsumei"">)(.*?)(<\/p>)");
            List<string> meaningReturn = new List<string>();
            foreach (Match meaning in meaningList)
            {
                if (Regex.Matches(meaning.Groups[2].Value.ToString(), @"(.*?<br>)|(.*)").Count > 0)
                {
                    foreach(Match m in Regex.Matches(meaning.Groups[2].Value.ToString(), @"(.*?<br>)|(.*)"))
                    {
                        meaningReturn.Add(m.Value.ToString()
                            .Replace("<span class=\"iro\">", "")
                            .Replace("</span>)", "")
                            .Replace("</span>", "")
                            .Replace("<s>", "")
                            .Replace("</s>", "")
                            .Replace("<rb>", "")
                            .Replace("<rp>", "")
                            .Replace("</rp>", "")
                            .Replace("<ruby>", "")
                            .Replace("</ruby>", "")
                            .Replace("</rb>", "")
                            .Replace("</rb>", "")
                            .Replace("(</rp>", "")
                            .Replace("<rp>)", "")
                            .Replace("<rt>", "")
                            .Replace("</rt>", "")
                            .Replace("<br>", "")
                            .Replace("br", "")
                            .Replace("<", "")
                            .Replace(">", "")
                            .Replace("(", "")
                            .Replace(")", "")
                            .ToString());
                    }
                }
                else
                {
                    meaningReturn.Add(meaning.Groups[2].Value.ToString());
                }
            }

            return meaningReturn;
        }

        private string getDetailPage(string link)
        {
            string htmlDetailGrammarPage = "";
            try
            {
                htmlDetailGrammarPage = CrawlDataFromURL(link);
            }
            catch
            {
                try
                {
                    htmlDetailGrammarPage = CrawlDataFromURL(link);
                }
                catch
                {
                    htmlDetailGrammarPage = "";
                }
            }

            return htmlDetailGrammarPage;
        }

        private List<Sentence> getDetailGrammar(string htmlDetailGrammarPage)
        {
            MatchCollection sentenceListTemp = Regex.Matches(htmlDetailGrammarPage, @"<li><p class=""reibun-ja"">(.*?)</p></li>");
            List<Sentence> sentencesReturn = new List<Sentence>();
            foreach (var sentence in sentenceListTemp)
            {
                var reibunJA1 = Regex.Matches(sentence.ToString(), @"(</rp><rt>(.*?)</rt><rp>)");
                string reibunJA2 = sentence.ToString();
                foreach (var ja1 in reibunJA1)
                {
                    reibunJA2 = reibunJA2.Replace(ja1.ToString(), "");
                }


                string reibunJA3 = Regex.Match(reibunJA2, @"<p class=""reibun-ja"">(.*?)</p>").Value.ToString();
                var reibunJA4 = Regex.Matches(reibunJA3, @">(.*?)<");
                string reibunJA = "";
                foreach (var ja4 in reibunJA4)
                {
                    reibunJA += ja4;
                }
                reibunJA = reibunJA.Replace("<", "").Replace(">", "").Replace("(", "").Replace(")", "");

                string reibunVN = Regex.Match(sentence.ToString(), @"<p class=""reibun-vn"">(.*?)</p>").Value
                    .Replace("<p class=\"reibun-vn\">", "")
                    .Replace("</p>", "");
                string reibunRO = Regex.Match(sentence.ToString(), @"<p class=""reibun-romaji"">(.*?)</p>").Value
                    .Replace("<p class=\"reibun-romaji\">", "")
                    .Replace("</p>", "");
                sentencesReturn.Add(new Sentence(reibunJA, reibunVN, reibunRO));
            }

            return sentencesReturn;
        }

        private void WriteJson(Grammar gram)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + @"\DataJson.txt";

            WriteTempN("{\n", path);
            WriteTempN("name:" + "'" + gram.name + "',\n", path);
            WriteTempN("level:" + "'" + gram.level + "',\n", path);
            WriteTempN("description:" + "'" + gram.description + "',\n", path);
            WriteTempN("meaning:[", path);
            foreach (var mean in gram.meaning)
            {
                WriteTempN(",{\n", path);
                WriteTempN("value:" + "'" + mean + "',", path);
                WriteTempN("}\n", path);
            }
            WriteTempN("],\n", path);
            WriteTempN("use:[", path);
            foreach (var u in gram.use)
            {
                WriteTempN(",{\n", path);
                WriteTempN("value:" + "'" + u + "',", path);
                WriteTempN("}\n", path);
            }
            WriteTempN("],\n", path);
            WriteTempN("sentence:[", path);
            foreach (var sen in gram.sentence)
            {
                WriteTempN(",{\n", path);
                WriteTempN("reibunJA:" + "'" + sen.reibunJA + "',\n", path);
                WriteTempN("reibunVN:" + "'" + sen.reibunVN + "',\n", path);
                WriteTempN("reibunRO:" + "'" + sen.reibunRO + "',\n", path);
                WriteTempN("}\n", path);
            }
            WriteTempN("]\n", path);
            WriteTempN("},\n", path);
        }

        private void WriteTemp(string html)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + @"\Data.txt";

            if (!File.Exists(path))
            {
                File.WriteAllText(path, html);
            }

            File.AppendAllText(path, html);
        }

        private void WriteTempN(string html, string path)
        {
            if (!File.Exists(path))
            {
                File.WriteAllText(path, html);
            }

            File.AppendAllText(path, html);
        }

        private void WriteTempNone(Grammar gram)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + @"\Data.txt";

            WriteTempN("----------------------###----------------------\n", path);
            WriteTempN("\n", path);
            WriteTempN("No: " + i, path);
            WriteTempN("\n", path);
            WriteTempN("Level: " + gram.level, path);
            WriteTempN("\n", path);
            WriteTempN("Name: " + gram.name, path);
            WriteTempN("\n", path);
            WriteTempN("Description: " + gram.description, path);

            WriteTempN("\n", path);
            WriteTempN("Meaning: ", path);
            foreach (var mean in gram.meaning)
            {
                WriteTempN("\n", path);
                WriteTempN(mean, path);
            }

            WriteTempN("\n", path);
            WriteTempN("How to use: ", path);
            foreach (var u in gram.use)
            {
                WriteTempN("\n", path);
                WriteTempN(u, path);
            }

            WriteTempN("\n", path);
            int j = 1;
            foreach (var sen in gram.sentence)
            {
                WriteTempN("\n", path);
                WriteTempN("VD " + j++ + ":", path);
                WriteTempN("\n", path);
                WriteTempN(sen.reibunJA, path);
                WriteTempN("\n", path);
                WriteTempN(sen.reibunVN, path);
                WriteTempN("\n", path);
                WriteTempN(sen.reibunRO, path);
            }
            WriteTempN("\n", path);
            WriteTempN("\n", path);
        }

        private void WriteTempWithLevel(Grammar gram)
        {
            string path = AppDomain.CurrentDomain.BaseDirectory + @"\DataN0.txt";

            if (gram.level.Equals("N1"))
            {
                path = AppDomain.CurrentDomain.BaseDirectory + @"\DataN1.txt";
            }
            else
            if (gram.level.Equals("N2"))
            {
                path = AppDomain.CurrentDomain.BaseDirectory + @"\DataN2.txt";
            }
            else
            if (gram.level.Equals("N3"))
            {
                path = AppDomain.CurrentDomain.BaseDirectory + @"\DataN3.txt";
            }
            else
            if (gram.level.Equals("N4"))
            {
                path = AppDomain.CurrentDomain.BaseDirectory + @"\DataN4.txt";
            }
            else
            if (gram.level.Equals("N5"))
            {
                path = AppDomain.CurrentDomain.BaseDirectory + @"\DataN5.txt";
            }

            WriteTempN("----------------------###----------------------\n", path);
            WriteTempN("\n", path);
            WriteTempN("No: " + i, path);
            WriteTempN("\n", path);
            WriteTempN("Level: " + gram.level, path);
            WriteTempN("\n", path);
            WriteTempN("Name: " + gram.name, path);
            WriteTempN("\n", path);
            WriteTempN("Description: " + gram.description, path);

            WriteTempN("\n", path);
            WriteTempN("Meaning: ", path);
            foreach (var mean in gram.meaning)
            {
                WriteTempN("\n", path);
                WriteTempN(mean, path);
            }

            WriteTempN("\n", path);
            WriteTempN("How to use: ", path);
            foreach (var u in gram.use)
            {
                WriteTempN("\n", path);
                WriteTempN(u, path);
            }

            WriteTempN("\n", path);
            int j = 1;
            foreach (var sen in gram.sentence)
            {
                WriteTempN("\n", path);
                WriteTempN("VD " + j++ + ":", path);
                WriteTempN("\n", path);
                WriteTempN(sen.reibunJA, path);
                WriteTempN("\n", path);
                WriteTempN(sen.reibunVN, path);
                WriteTempN("\n", path);
                WriteTempN(sen.reibunRO, path);
            }
            WriteTempN("\n", path);
            WriteTempN("\n", path);
        }

        public void IniHttpClient()
        {
            handler = new HttpClientHandler
            {
                CookieContainer = cookie,
                ClientCertificateOptions = ClientCertificateOption.Automatic,
                AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate,
                AllowAutoRedirect = true,
                UseDefaultCredentials = false
            };

            httpClient = new HttpClient(handler)
            {
                BaseAddress = new Uri(HomePage)
            };
        }

        public string CrawlDataFromURL(string url)
        {
            string html = "";

            try
            {
                html = httpClient.GetStringAsync(url).Result;
            }
            catch
            {
                try
                {
                    html = httpClient.GetStringAsync(url).Result;
                }
                catch
                {
                    html = "";
                }
            }

            return html;
        }

        #endregion
    }
}
