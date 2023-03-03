interface NumberRoundedProps {
  number: number;
}

export const NumberRounded = (props: NumberRoundedProps) => {
  const { number } = props;

  return (
    <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
      {number}
    </div>
  );
};
