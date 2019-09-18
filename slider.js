document.getElementById("entire_article_1").style.display = "none";
document.getElementById("entire_article_2").style.display = "none";

function slide_growup() {
    var display_article = document.getElementById("entire_article_1")
    var display_article_2 = document.getElementById("entire_article_2")
    if (display_article.style.display === "none") 
    {
        display_article.style.display = "flex";
        display_article_2.style.display = "none";
    } 
    else {
        display_article.style.display = "none";
    }
  }

  function slide_growup_2() {
    var display_article = document.getElementById("entire_article_1")
    var display_article_2 = document.getElementById("entire_article_2")
    if (display_article_2.style.display === "none") 
    {
        display_article_2.style.display = "flex";
        display_article.style.display = "none";
    } 
    else {
        display_article_2.style.display = "none";
    }
  }



