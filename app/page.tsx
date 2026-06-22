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
      date: "15 July 2026",
      time: "1:20 AM",
      text: `
Hi Dear,

I wanted to write again.

Some thoughts are easier to put here
than to say out loud.

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