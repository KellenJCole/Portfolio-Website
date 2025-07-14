import { Typewriter } from 'react-simple-typewriter';

export default function IntroTypeWriter() {
  return (
    <h3 className="font-mono text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
      Welcome, I'm
      <br />
      <span className="block font-caveat text-5xl sm:text-6xl md:text-8xl mb-1">
        Kellen J. Cole
      </span>
      <span className="inline-block min-w-[22ch] max-w-full whitespace-nowrap">
        I am a{' '}
        <Typewriter
          words={[
            'developer',
            'learner',
            'tinkerer',
            'problem solver',
            'self-starter',
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          cursorBlinking={false}
          typeSpeed={75}
          deleteSpeed={60}
          delaySpeed={700}
        />
      </span>
    </h3>
  );
}
