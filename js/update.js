
/// <reference path="../typings/node/node.d.ts" />

var langs = [
  ['index.html'   ,'img/icon_en.png','english'], 
  ['index_de.html','img/icon_de.png','german',false], 
  ['index_fr.html','img/icon_fr.png','french',false], 
  ['index_ru.html','img/icon_ru.png','russian'], 
  ['index_pl.html','img/icon_pl.png','polish'], 
  ['index_es.html','img/icon_es.png','spanish',false], 
  ['index_ja.html','img/icon_ja.png','japanese',false], 
  ['index_zh.html','img/icon_zh.png','chinese'] 
];

var rootDir = process.argv[2] || ".";
var fs      = require("fs");
var path    = require("path");


function getLang(name) {   return name.match(/.*_[a-z]{2}\.html/) ? name.substring(name.lastIndexOf('_')) : "_en_";   }

function getIndexFile(name) {
   for (var i=0;i<langs.length;i++) {
      if (langs[i][0]   == name) return name;
      if (getLang(name) == getLang(langs[i][0])) return langs[i][0];
   }
   return langs[0][0];
}

function getLangHtml(fname) {
   var html="";
   if (fname.indexOf("/")>0)   fname = fname.substring(fname.lastIndexOf("/")+1);
   var srcLang = getLang(fname || "index.html")
   langs.forEach(function(l){
      var lang = getLang(l[0]), target=fname;
      if (srcLang=="_en_")  
         target = fname.replace(/(.*)\.html/,"$1"+lang);
      else if (lang=="_en_") 
         target = fname.replace(/(.*)_[a-z]{2}\./,"$1.");
      else
         target = fname.replace(/(.*)_[a-z]{2}\.html/,"$1"+lang);
      
      if (l.length==4 && !l[3]) return;
      
      if (lang != srcLang) 
         html+='<a href="'+target+'"><img src="'+l[1]+'" width="18" align="top"  title="'+l[2]+'"></a>&nbsp;';
      else
         html+='<img class="grayscale" src="'+l[1]+'" width="18" align="top"  title="'+l[2]+'">&nbsp;';
   });
   return html;
}

function getContent(template, mark) {
   var start = template.indexOf(mark);
   var end   = template.indexOf(mark.replace("include","/include"));
   return (start>0 && end>start) ? template.substring(start,end) : "";
}

function replaceLanguages(content, file, div) {
   var start = content.indexOf(div);
   var end   = content.indexOf("</div>",start);
   return start>0 ? content.substring(0,start)+div+ getLangHtml(file)+content.substring(end) : content;
}

function findIncludeMarks(content) {
   var startPattern = /<!\-\-include ([a-zA-Z_\-]+) \-\->/g;
   var marks        = [];
   var found;
   while ((found = startPattern.exec(content))!==null)   marks.push(found[0]);
   return marks;
}


function replaceIncludes(template, content, file) {
   var srcContent = content;
   findIncludeMarks(content).forEach(function(mark){
      var src   = getContent(template,mark);
      if (src) 
        content = content.substring(0,content.indexOf(mark))+src+content.substring(content.indexOf(mark.replace("include","/include")));
   });
   
   content = replaceLanguages(content, file, '<div class="lang-menu slock-lang">');
   content = replaceLanguages(content, file, '<div class="menu pull-right slock-lang">');
   
   // handle lang
   if (srcContent!=content) {
      console.log("update "+file);
      fs.writeFile(path.join(rootDir,file), content, {encoding:"utf-8"});
   }   
}

function updateFile(file) {
   if (file.indexOf(".html")<0) return;
   fs.readFile(path.join(rootDir,file),"utf-8",function(err,data){
      var template = getIndexFile(file);
      if (template)
         fs.readFile(path.join(rootDir,template),"utf-8",function(err2, data2){
            replaceIncludes(data2, data, file);
         });
   });
}

fs.readdir(rootDir, function(err,files) {   files.forEach(updateFile);   });

