"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [title, setTitle] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState("");

  const heading = "Words that can't slip past the chains I call my teeth";


  const letters = [
    {
      date: "23 June 2026",
      time: "12:55 AM",
      text: `
Hi Dear,

I don't know how to start this.

There are things I wanted to say,
but every time I tried,
the words stayed inside my head.

So I decided to leave them here.

A small piece of my thoughts,
written at a moment when I couldn't keep them to myself anymore.

Maybe this letter was never meant to be perfect.

Maybe it was only meant to be honest.

If you've read this far,
then maybe I was brave enough after all.
`
    },


    {
      date: "23 June 2026",
      time: "2:40 AM",
      text: `
Hi Dear,

I thinks its almost 4 weeks since we first met.
I still remember that day like it was yesterday.
I give the benefit of doubt to you as you said you don't want to rush things,
maybe knowing each other flaws, quirks and all, is a process that takes time.
Time can be a good thing, but it can also be a bad thing.
I once viewed love as something that should happens instantly,
but now I see it as something that should happens naturally and slowly.
And I don't know if what we have is natural or not,
but I do know that I want to keep it. (not in a possessive way, but in a hopeful way)

I saw that modern love demands immediacy, 
causing the curiosity to know each other faded away quickly,
and the relationship becomes more of a routine than an adventure.
I don't want that for us, I want us to keep discovering each other,
to keep being surprised by each other,
to keep being curious about each other.

I know most times I will be a bit quiet, 
but that doesn't mean I don't want to talk to you,
it just all of my thoughts and questions are gone.
The things is every moment I spend with you, I feel so calmed and at ease,
and I don't want to break that by overthinking and overanalyzing things.
I just want to be with you, and let things happen as they should.

Regret. 
Yeah, I do have some regrets, which is not saying a proper goodbye to you on our last day together,
its just I was too consumed by jealousy,
and I kept rethinking at the moment,
"why don't he hug me? why don't he kiss me? why don't he say something to me? why don't he look at me? why don't he hold my hand?"
And I know that I shouldn't have expected those things from you,
but I just couldn't help it, I wanted to be close to you, and I wanted to show you how much I care about you,
and I thought that those things would be a good way to do that.
But instead of showing you how much I care about you, I ended up showing you how much I care about myself,
and that was not what I wanted at all.
I always feed myself with the idea that I was just a person who is only capable of being one night stand,
 and that I will never be able to have a real relationship with someone, and that I will never be able to love someone,
  and that I will never be able to be loved by someone, and that I will always be alone,
   and that I will always be a failure, and that I will always be a disappointment, 
   and that I will always be a burden to everyone around me, 
   and that I will always be a waste of space and time.
Its like where everyone wanna take me out but never to a home. 
Enough too touch but not enough to be held. 
Enough to feel the flicker but not the flame

Jealousy?
I questioned myself.
Am I in the right to be jealous?
Is it valid for me to be jealous?
I leave this question to you.

So here is another piece of me.

Thank you for reading.
`
    },

    {
      date: "23 June 2026",
      time: "4:21 PM",
      text: `
Hi Dear,

I just want to say that I really appreciate you taking the time to read my letters.
Reading your responses in your own words,
knowing that you took the time to understand my thoughts and feelings,
and that you care enough to respond in a thoughtful and meaningful way,
means a lot to me.

One question I have is, why do you feel the need to offer something as the price for being loved?
I don't actually care whether you have money or not,
I care about you as a person, and I care about the connection we have.

The most things that matter to me usually how you manage things,
if you are busy, what do you do? 
Telling me about your situation, it's more than enough for me,
I'm not a materialistic person, I don't care about money or gifts,
but even if I do, most things I will work hard to get it myself,
I like a low maintenance relationship.
A simple relationship.
Dates at the park, picnics, eating some chips junks, watching movies together,
drawing,listening to muusic, discover new things together,
people watching, and just being together, that's all I want.

I mostly understand your concern about the people around us,
I'm the kind of person that doesn't like PDA.
I like to keep things private, and I like to keep things between us.
It's a secret but everybody knows I'm in relationship,
something like soft launch, things like that.

You might have a small heart, but big enough to love.

So here is another piece of me.

Thank you for reading.
`
    },
    {
      date: "25 June 2026",
      time: "4:39 AM",
      image: "/photos/IMG_5265.JPG",
      text: `
Hi Dear,

Hungry. Thanks for the food :3

Today is not a good day for me.
Relapse.
But I try not too think much about it, but I already started to isolate myself from my friends, 24/7 with music,
anxiety on the roof, thinking of taking back my meds even though I know the effects of it,
Its just I can shape the kinds of problems I'm facing and thinking about.
But I try my best to not go back to a bad ways of coping with it. HEHE.

Even I'm sad, I just need to push myself to do things like study, work, and other things that I need to do.
Plus I have this things I call Scientific Love, where I relate my study to anything in life,
the most latest one is about the radical polymerization, I think you know about it too maybe,
so generally we know it goes from initiation, propagation, and termination.
Initiation is the start of the reaction, where the monomer is activated by the initiator,
It's like the start of a relationship, where two people are attracted to each other and start to get to know each other.
Propagation is the growth of the polymer chain, where the monomer is added to the growing chain,
It's like the growth of a relationship, where two people are getting to know each other better and better.
Then we have termination, but this time I learn two types of termination, one is combination and the other is disproportionation.
Combination is where two growing polymer chains combine to form a single polymer chain,
It's like the combination of two people in a relationship, where they become one and start to build a life together.
Disproportionation is where one growing polymer chain transfers its radical to another growing polymer chain,
It's like this is where the end of a relationship, where one person leaves the relationship and the other person is left behind,
both with a different radical, and they go their separate ways, but they still have a connection to each other, 
and they still have a bond that will never be broken.

There's a lot more for this kind of thinking. 
I will share more day by day, and I hope you will enjoy it too.
For you to know me more, and for me to know you more.

That's a piece of me for this letter.

Thank you for reading and the food. (writing this while eating the food you gave me, hehe)
`
    },

    {
      date: "25 June 2026",
      time: "12:45 PM",
      image: "/photos/dictionary.jpg",
      text: `
Hi Dear,

This is just a random letter.Maybe a poem I would say.

I'm born too late,
Too late that none of dictionary can define you.
Define you through my lenses, where you are a pure nefelibata.
A nefelibata wandering through a world without your glow.
Your glow carrying the quiet scent of fresh petrichor.
Fresh petrichor washing old pages into a sempiternal love.
Sempiternal because language failed before it could hold us.
Hold us in words, where none were ever made for you. :3

Vocab for today:
1. Nefelibata: in my poem, someone who is rare, whimsical or otherworldly
2. Ethereal: I describe the beauty or presence that feels supernatural
3. Petrichor: The calming earthy after rain smell
4. Sempiternal: everlasting/eternal 

Okay asyik English je, nak jugak try Bahasa Melayu, dulu pandai la jugak,
kan tulis karangan HAHAHAH "sering meniti dari bibir ke bibir manusia dari kedai kopi hingga ke sidang parlimen...." HAHHAHAH

okay okay

Aku hadir terlalu lewat,
Terlalu lewat sehingga tiada kata di kalam wujud untuk mendefinasikanmu,
Mendefinasikanmu melalui lensaku, tempat kau menjelma seolah pesona yang abadi.
Pesona yang mengembara dunia yang kehilangan nurmu.
Nurmu sehalus bayu,selembut sutera, dan sesyahdu harum bumi seusai hujan.
Seusai hujan, terbitlah cinta yang lestari memadam lembaran sejarah lalu.
Cinta yang lestari karna bahasa tewas sebelum sempat memahami kita.
Memahami kita dalam tutur kata, dikala dirimu melampaui segala bahasa.

eceh,hahahaha. Ni baru je terfikir sebab tadi cam fikir ada sesetengah perkataaan yang tidak ada dalam kamus
tk kisahla oxford ke apa. To describe certain feelings or beauty of something. Eg: kintsugi.
Heheheheh

Selamat menelaah.

Random afternoon. <3

`
    },
  ];


  // Title typing

  useEffect(() => {

    let i = 0;

    const typing = setInterval(() => {

      setTitle(heading.slice(0, i));
      i++;

      if (i > heading.length) {
        clearInterval(typing);
      }

    }, 100);


    return () => clearInterval(typing);

  }, []);



  // Letter typing

  useEffect(() => {

    if (selectedLetter === null) return;


    setDisplayText("");

    let i = 0;

    const text = letters[selectedLetter].text;

    const typing = setInterval(() => {

      setDisplayText(text.slice(0, i));

      i++;

      if (i > text.length) {
        clearInterval(typing);
      }

    }, 50);


    return () => clearInterval(typing);


  }, [selectedLetter]);

const image = selectedLetter !== null
  ? letters[selectedLetter].image
  : null;

  return (

    <main className="min-h-screen bg-black text-white px-6 font-mono">

      <div className="max-w-2xl mx-auto pt-28">


        <h1 className="text-xl md:text-3xl mb-16">

          {title}

          <span className="animate-pulse">|</span>

        </h1>



        {selectedLetter === null ? (

          <div>


            <h2 className="text-xl mb-8">
              Letters
            </h2>


            {letters.map((item, index) => (

              <div 
              key={index}
              className="mb-8 border-b border-gray-700 pb-6"
              >


                <p className="text-gray-400">
                  {item.date}
                </p>


                <p className="text-gray-400 mb-4">
                  {item.time}
                </p>


                <button
                onClick={() => setSelectedLetter(index)}
                className="border px-5 py-2"
                >

                  Read

                </button>


              </div>

            ))}


          </div>


        ) : (


          <div>


            <p className="text-gray-400 mb-10">

              Date: {letters[selectedLetter].date}
              <br />

              Time: {letters[selectedLetter].time}

            </p>

            {image && (
              <div className="mb-10 flex justify-center">
                <Image
                  src={image}
                  alt="Letter Image"
                  width={300}
                  height={250}
                  className="rounded-xl w-64"
                />
              </div>
            )}


            <p className="whitespace-pre-line text-base md:text-lg leading-loose">

              {displayText}

              <span className="animate-pulse">|</span>

            </p>



            <div className="mt-20 text-center">


              <p className="mb-8">
                — Fadi
              </p>


              <a
              href="https://wa.me/601114945347?text=I%20read%20your%20letter"
              target="_blank"
              className="border px-6 py-3"
              >

                Write back

              </a>


              <br /><br />


              <button
              onClick={() => setSelectedLetter(null)}
              className="text-gray-400"
              >

                Back to letters

              </button>


            </div>


          </div>


        )}


      </div>


    </main>

  );

}