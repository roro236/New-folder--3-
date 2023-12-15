var myQutes = [
    {    quteTitle:`“Be yourself; everyone else is already taken.”`,
        quteAuther:`― Oscar Wilde`
    },
    {
        quteTitle:`“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”`,
        quteAuther:`― Albert Einstein`
    },
    {    quteTitle:`“A room without books is like a body without a soul.”`,
         quteAuther:`― Marcus Tullius Cicero`
    },
    {    quteTitle:`“You only live once, but if you do it right, once is enough.”`,
         quteAuther:`― Mae West`
    },
    {    quteTitle:`“ Be the change that you wish to see in the world.”`,
         quteAuther:`― Mahatma Gandhi`
    },
    {    quteTitle:`“In three words I can sum up everything I've learned about life: it goes on”`,
         quteAuther:`― Robert Frost`
    },
    {    quteTitle:`“ If you tell the truth, you don't have to remember anything”`,
         quteAuther:`―  Mark Twain`
    },
    {    quteTitle:`“ Imperfection is beauty, madness is genius and it's better to be absolutely ridiculous than absolutely boring”`,
         quteAuther:`― Marilyn Monroe`
    },
    {    quteTitle:`“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle”`,
         quteAuther:`― Albert Einstein`
    },
    {    quteTitle:`“Good friends, good books, and a sleepy conscience: this is the ideal life”`,
         quteAuther:`― Mark Twain`
    },
    {    quteTitle:`“We are all in the gutter, but some of us are looking at the stars”`,
         quteAuther:`― Oscar Wilde`
    },
    ]
    function addQute(){
        randomindex = Math.floor(Math.random() * myQutes.length);
        document.getElementById('quteTitle').innerHTML=myQutes[randomindex].quteTitle;
        document.getElementById('quteAuther').innerHTML=myQutes[randomindex].quteAuther;
    } ;