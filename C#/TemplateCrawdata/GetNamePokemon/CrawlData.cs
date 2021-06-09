using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace GetNamePokemon
{
    class CrawlData
    {
        HttpClient httpClient;
        HttpClientHandler handler;
        CookieContainer cookie = new CookieContainer();
        string HomePage = "https://pokemondb.net/pokedex/all";
        int i = 0;

        public void CrawDataMain()
        {
            IniHttpClient();
            Console.OutputEncoding = System.Text.Encoding.UTF8;
            Console.Title = "Tool get pokemon name (author TuanNA)";

            string htmlGrammarPage = CrawlDataFromURL(HomePage);

            
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

    }
}
