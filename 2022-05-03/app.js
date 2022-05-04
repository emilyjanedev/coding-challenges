//URL--

//INSTRUCTIONS
/* Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. 
For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet" */

//SOLUTION
function domainName(url){
    if (url.includes('www.')) {
        return url.slice(url.indexOf('.') + 1, url.indexOf('.', url.indexOf('.') + 1));
    } else if (url.includes('http')) {
        return url.slice(url.indexOf('/') + 2, url.indexOf('.', url.indexOf('/') + 2));
    } else {
        return url.slice(url[0], url.indexOf('.'));
    }
}

//TEST CASES
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");