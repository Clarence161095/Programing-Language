using System;
using System.Collections.Generic;

namespace Regex_jlptvietnam
{
    internal class Grammar
    {
        public string name;
        public string level;
        public string description;
        public string link;
        public List<Sentence> sentence;
        public List<string> meaning;
        public List<string> use;


        public Grammar(string name, string level, string description, string link)
        {
            this.name = name;
            this.level = level;
            this.description = description;
            this.link = link;
        }

        public Grammar(string name, string level, string description, string link, List<Sentence> sentence) : this(name, level, description, link)
        {
            this.sentence = sentence;
        }

        public Grammar(string name, string level, string description, string link, List<Sentence> sentence, List<string> meaning, List<string> use) : this(name, level, description, link, sentence)
        {
            this.meaning = meaning ?? throw new ArgumentNullException(nameof(meaning));
            this.use = use ?? throw new ArgumentNullException(nameof(use));
        }
    }
}