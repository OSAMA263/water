export default function SectionHeader({ title, text }) {
  return (
    <div className="font-semibold flex flex-col items-center gap-y-8 text-center text-Gray w-1/2 mx-auto">
      <img src="logo.svg" alt="logo" />
      <h1 className="text-6xl leading-none">{title}</h1>
      <p>
        {text ??
          "Merge visionary thinking with unparalleled excellence. Achieve extraordinary results through a seamless blend of creativity and strategic insight."}
      </p>
    </div>
  );
}
