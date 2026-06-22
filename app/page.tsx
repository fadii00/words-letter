"use client";

import { useEffect, useState } from "react";

export default function Home() {

  const [title, setTitle] = useState("");
  const [selectedLetter, setSelectedLetter] = useState<number | null>(null);
  const [displayText, setDisplayText] = useState("");

  const heading = "The words I don't dare to speak.";


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
    }

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



            <p className="whitespace-pre-line text-base md:text-lg leading-loose">

              {displayText}

              <span className="animate-pulse">|</span>

            </p>



            <div className="mt-20 text-center">


              <p className="mb-8">
                — Fadi
              </p>


              <a
              href="https://wa.me/YOURNUMBER?text=I%20read%20your%20letter"
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