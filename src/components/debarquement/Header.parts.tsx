import gsap from 'gsap';
import { useLayoutEffect } from 'react';
import Splitting from 'splitting';

export default function Header() {
    useLayoutEffect(() => {
        // const splitOverLord = Splitting({
        //     target: '#hero-overlord',
        // })[0] as Splitting.Result;
        const splitOperation = Splitting({
            target: '#hero-operation',
        })[0] as Splitting.Result;
        const splitDate = Splitting({
            target: '#hero-date',
        })[0] as Splitting.Result;

        gsap.fromTo(
            '.hero-overlord',
            {
                opacity: 0,
                y: 100,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.5,
            },
        );

        gsap.fromTo(
            splitOperation.chars!,
            {
                opacity: 0,
                transform: 'translateY(100%)',
            },
            {
                opacity: 1,
                transform: 'translateY(0%)',
                duration: 1,
                stagger: 0.2,
            },
        );

        gsap.fromTo(
            splitDate.chars!,
            {
                opacity: 0,
                transform: 'translateY(100%)',
            },
            {
                opacity: 1,
                transform: 'translateY(0%)',
                duration: 1,
                stagger: 0.2,
                delay: 3,
            },
        );
    }, []);
    return (
        <header className="h-screen bg-hero-image object-contain bg-cover bg-center">
            <h2
                id="hero-operation"
                className="pl-[14vw] text-[5vw] absolute opacity-50 top-8"
            >
                Opération
            </h2>
            <h1
                id="hero-overlord"
                className="text-center text-[20vw] uppercase pt-10 [&>span>span]:inline-block"
            >
                <span className="word" data-word="Overlord">
                    <span className="char hero-overlord" data-char="O">
                        O
                    </span>
                    <span className="char hero-overlord" data-char="v">
                        v
                    </span>
                    <span className="char hero-overlord" data-char="e">
                        e
                    </span>
                    <span className="char hero-overlord" data-char="r">
                        r
                    </span>
                    <span className="char hero-overlord" data-char="l">
                        l
                    </span>
                    <span className="char hero-overlord" data-char="o">
                        o
                    </span>
                    <span className="char hero-overlord" data-char="r">
                        r
                    </span>
                    <span className="char hero-overlord" data-char="d">
                        d
                    </span>
                </span>
            </h1>
            <h3
                id="hero-date"
                className="relative -translate-y-[140%] text-[5vw] text-yellow-300 w-screen text-center drop-shadow-lg"
            >
                Juin 1944
            </h3>
        </header>
    );
}
