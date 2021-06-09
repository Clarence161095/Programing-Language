//using System;
//using System.IO;
//using System.Net;
//using System.Net.Http;
//using System.Text.RegularExpressions;

//namespace CrawData
//{
//    internal class CrawlData
//    {
//        HttpClient httpClient;
//        HttpClientHandler handler;
//        CookieContainer cookie = new CookieContainer();
//        string HomePage = "https://jlptvietnam.com/danh-sach-ngu-phap-tieng-nhat/";
//        // int i = 0;

//        public void CrawDataMain()
//        {
//            IniHttpClient();
//            Console.OutputEncoding = System.Text.Encoding.UTF8;
//            Console.Title = "Test tool crawdata";

//            //string result = CrawlDataFromURL(HomePage);

//            Console.WriteLine("Enter keys:");

//            string Key = Console.ReadLine();

//            string[] listKeys = Key.Split(',');

//            string link = "";

//            foreach (string k in listKeys)
//            {
//                //会う,青,青い,赤,赤い,明い
//                //link = HomePage + k;
//                link = HomePage;
//                string result = CrawlDataFromURL(link.ToString());
//                //var regexData = Regex.Matches(result, @"<li><u class=""furigana_text japan-font"">(.*?)<\/p><span class=""example-analyze-view""");

//                Console.WriteLine(result);
//                Console.WriteLine(link);

//                //var regexData = Regex.Matches(result, @"font(.*?)example");

//                //foreach (var re in regexData)
//                //{
//                //    Console.WriteLine(re.ToString());
//                //}
//            }
//        }

//        private void WriteTemp(string html)
//        {
//            string path = AppDomain.CurrentDomain.BaseDirectory + @"\Data.txt";

//            if (!File.Exists(path))
//            {
//                File.WriteAllText(path, html);
//            }

//            File.AppendAllText(path, html);
//        }

//        public void IniHttpClient()
//        {
//            handler = new HttpClientHandler
//            {
//                CookieContainer = cookie,
//                ClientCertificateOptions = ClientCertificateOption.Automatic,
//                AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate,
//                AllowAutoRedirect = true,
//                UseDefaultCredentials = false
//            };

//            httpClient = new HttpClient(handler)
//            {
//                BaseAddress = new Uri(HomePage)
//            };
//        }

//        public string CrawlDataFromURL(string url)
//        {
//            string html = "";

//            try
//            {
//                html = httpClient.GetStringAsync(url).Result;
//            }
//            catch
//            {
//                try
//                {
//                    html = httpClient.GetStringAsync(url).Result;
//                }
//                catch
//                {
//                    html = "";
//                }
//            }

//            return html;
//        }
//    }
//}