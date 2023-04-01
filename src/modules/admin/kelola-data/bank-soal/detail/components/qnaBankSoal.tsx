import { NumberRounded } from "@/modules/components/number";
import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { typeList, mapelList } from "@/lib/tryout/type";

export const DetailQnABankSoal = (props: any) => {
  const { data } = props;
  const [content, setContent] = useState(data);

  console.log(data);

  return (
    <>
      {content.map((item: any, i: number) => (
        <QnAField
          index={i}
          key={i}
          questionValue={item.content}
          answersValue={item.answers}
          correctAns={item.correctAns}
          typeValue={item.type}
          mapelValue={item.mapel}
        />
      ))}
    </>
  );
};

interface QnAFieldProps {
  index: number;
  questionValue: string;
  answersValue: string[];
  correctAns: string;
  typeValue: number;
  mapelValue: number;
}

const QnAField = (props: QnAFieldProps) => {
  const {
    index,
    questionValue,
    answersValue,
    correctAns,
    typeValue,
    mapelValue,
  } = props;

  const filterType = (type: number) => {
    const filter = typeList
      .filter((item) => item.id === type)
      .map((item, i) => <p key={i}>{item.name}</p>);

    return filter;
  };

  const filterMapel = (mapel: number) => {
    const filter = mapelList
      .filter((item) => item.id === mapel)
      .map((item, i) => <p key={i}>{item.name}</p>);

    return filter;
  };

  return (
    <div className="bg-white p-5 rounded-xl mt-10">
      <div className="flex justify-between">
        <div className="flex flex-row items-center">
          <NumberRounded number={index + 1} />
          <h2 className="text-lg font-semibold">Soal</h2>
        </div>
        <div className="flex items-center gap-5">
          <div className="badge badge-lg badge-secondary text-primary">
            {filterType(typeValue)}
          </div>
          <div className="badge badge-lg badge-secondary text-primary">
            {filterMapel(mapelValue)}
          </div>
          <button className="btn bg-gray-200 text-black hover:bg-slate-300 border-none mr-3">
            <FaPlus className="w-3 h-3 mr-3" />
            Pembahasan
          </button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <div className="flex flex-row mt-5">
            <div className="invisible">
              <NumberRounded number={1} />
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Soal"
              rows={7}
              value={questionValue}
              disabled
            ></textarea>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex flex-row-reverse"></div>
          <div className="flex flex-col gap-5 mt-5">
            {answersValue.map((item, i) => (
              <InputJawaban
                questionIndex={index}
                index={i}
                key={i}
                answerValue={item}
                correctAns={correctAns}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

interface InputJawabanProps {
  questionIndex: number;
  index: number;
  answerValue: string;
  correctAns: string;
}

const InputJawaban = (props: InputJawabanProps) => {
  const { questionIndex, index, answerValue, correctAns } = props;

  return (
    <>
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center rounded-full w-10 h-10 bg-gray-200 text-gray-400 font-bold mr-5 aspect-square">
          {index === 0
            ? "A"
            : index === 1
            ? "B"
            : index === 2
            ? "C"
            : index === 3
            ? "D"
            : index === 4
            ? "E"
            : ""}
        </div>
        <input
          type="text"
          value={answerValue}
          placeholder="Type here"
          required
          className="input input-bordered w-full"
          disabled
        />
        <input
          value={answerValue}
          checked={correctAns === answerValue}
          type="checkbox"
          className="checkbox ml-3"
          disabled
        />
      </div>
    </>
  );
};
