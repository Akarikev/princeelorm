"use client";

import { artistLinks } from "@/data/links";

import React, { useEffect } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Music3Icon } from "lucide-react";
function MusicCards() {
  return (
    <div className="px-6 md:px-40 lg:px-44">
      <div>
        <p className="p-2 text-center uppercase md:text-xl text-cyan-900 ">
          Check out some of my songs
        </p>

        <h1 className="uppercase text-xl text-cyan-700 mt-3">
          LATEST RELEASES 🎧
        </h1>

        <small className="text-cyan-700 pb-4">
          Listen the latest releases from last week
        </small>

        <div className="md:flex-row flex-col flex gap-4">
          <iframe
            src="https://open.spotify.com/embed/album/0wkwyiAFzDUv9tBUuPUZCs?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          ></iframe>

          <iframe
            src="https://open.spotify.com/embed/album/05DCAOnWN3ZhMliRz8FuyB?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="rounded-xl"
          ></iframe>
        </div>

        <h1 className="uppercase text-xl text-cyan-700 mt-6">TOP TRACKS ↗</h1>

        <small className="text-cyan-700 pb-4">Listen to the top songs</small>

        <iframe
          src="https://open.spotify.com/embed/artist/3z4uisPPS3BhE21bhGmlMT?utm_source=generator"
          width="100%"
          height="352"
          frameBorder="0"
          allowFullScreen
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          loading="lazy"
          className="rounded-xl"
        ></iframe>
      </div>

      <div className="mt-9">
        <h1 className="uppercase text-xl text-cyan-700 mt-6">CATALOGUE 📇</h1>
        <small className="text-cyan-700 pb-4">
          check out the whole catalogue! 😲
        </small>
        <div className="">
          <div className="flex flex-row gap-4">
            <small className="rounded-2xl text-white bg-cyan-800 p-2">
              Popular Releases
            </small>
            <small className="rounded-2xl text-cyan-800 bg-gray-300 p-2">
              EPS and Singles
            </small>
          </div>

          <div className="mt-4">
            <iframe
              src="https://open.spotify.com/embed/playlist/2fnVPKOdwxAlms01MVQhIl?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allowFullScreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              className="rounded-xl"
            ></iframe>
          </div>
        </div>

        <h1 className="uppercase text-xl text-cyan-700 mt-6">OTHER LINKS</h1>
        <small className="text-cyan-700 pb-4">
          check out other places you can listen to my music
        </small>

        <div>
          <div>
            {artistLinks.map((item) => {
              return (
                <div key={item.name}>
                  <Link href={item.link} className="flex gap-2">
                    <Button
                      variant={"link"}
                      className={`${
                        item.name === "Spotify"
                          ? "bg-green-500"
                          : item.name === "Apple Music"
                          ? "bg-red-500"
                          : item.name === "Audiomack"
                          ? "bg-yellow-800"
                          : item.name === "Instagram"
                          ? "bg-red-300"
                          : item.name === "X"
                          ? "bg-blue-600"
                          : item.name === "Linktr.ee"
                          ? "bg-green-300"
                          : "bg-red-200"
                      } mt-3 text-white`}
                    >
                      {item.name}
                    </Button>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicCards;
