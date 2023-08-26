export function FloatingClasses() {
  const arkhamClasses = [
    { name: "guardian", key: "q" },
    { name: "mystic", key: "w" },
    { name: "seeker", key: "e" },
    { name: "survivor", key: "r" },
    { name: "rougue", key: "t" },
  ];

  return (
    <div>
      {arkhamClasses.map(({ name, key }, idx) => (
        <p
          class={`text-${name} font-arkham-horror text-6xl opacity-0 p-4 absolute top-[${
            Math.floor(Math.random() * (90 - 10) + 10)
          }%] left-[${
            Math.floor(Math.random() * (90 - 10) + 10)
          }%] animate-floating-classes animation-delay-[${idx}s]`}
        >
          {key}
        </p>
      ))}
    </div>
  );
}
