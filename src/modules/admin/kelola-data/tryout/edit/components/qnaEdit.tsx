import { NumberRounded } from "@/modules/components/number";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";

export const QnAEditTryout = (props: any) => {
  const { content, setContent } = props;

  const addQuestion = (e: any) => {
    e.preventDefault();
    setContent((prev: any) => {
      return [
        ...prev,
        {
          type: 2,
          mapel: 3,
          content: "",
          answers: ["", "", "", "", ""],
          correctAns: "",
        },
      ];
    });
  };

  const deleteQuestion = (e: any, index: number) => {
    e.preventDefault();
    const deletedQuestion = [...content];
    deletedQuestion.splice(index, 1);
    setContent(deletedQuestion);
  };

  const storingQuestion = (index: number, value: string) => {
    setContent((prev: any) => {
      const newArr = prev.slice();
      newArr[index].content = value;

      return newArr;
    });
  };

  const storingAnswer = (
    questionIndex: number,
    index: number,
    value: string
  ) => {
    setContent((prev: any) => {
      const newArr = prev.slice();
      newArr[questionIndex].answers[index] = value;

      return newArr;
    });
  };

  const storingCorrectAnswer = (questionIndex: number, value: string) => {
    setContent((prev: any) => {
      const newArr = prev.slice();
      newArr[questionIndex].correctAns = value;

      return newArr;
    });
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  return (
    <>
      {content.map((item: any, i: number) => (
        <QnAField
          index={i}
          key={i}
          deleteQuestion={deleteQuestion}
          storingQuestion={storingQuestion}
          storingAnswer={storingAnswer}
          questionValue={item.content}
          answersValue={item.answers}
          correctAns={item.correctAns}
          storingCorrectAnswer={storingCorrectAnswer}
        />
      ))}
      <button
        onClick={(e) => addQuestion(e)}
        className="btn bg-gray-200 text-black hover:bg-slate-300 border-none mr-3 mt-5"
      >
        <FaPlus className="w-3 h-3 mr-3" />
        Tambah
      </button>
    </>
  );
};

interface QnAFieldProps {
  index: number;
  deleteQuestion: (e: any, index: number) => void;
  storingQuestion: (i: number, value: string) => void;
  storingAnswer: (questionIndex: number, i: number, value: string) => void;
  storingCorrectAnswer: (questionIndex: number, value: string) => void;
  questionValue: string;
  answersValue: string[];
  correctAns: string;
}

const QnAField = (props: QnAFieldProps) => {
  const {
    index,
    deleteQuestion,
    storingQuestion,
    storingAnswer,
    storingCorrectAnswer,
    questionValue,
    answersValue,
    correctAns,
  } = props;

  return (
    <div className="bg-white p-5 rounded-xl mt-10">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <div className="flex flex-row items-center">
            <NumberRounded number={index + 1} />
            <h2 className="text-lg font-semibold">Soal</h2>
          </div>
          <div className="flex flex-row mt-5">
            <div className="invisible">
              <NumberRounded number={1} />
            </div>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Soal"
              rows={7}
              onChange={(e) => storingQuestion(index, e.target.value)}
              value={questionValue}
            ></textarea>
          </div>
        </div>
        <div className="col-span-6">
          <div className="flex flex-row-reverse">
            <button
              onClick={(e) => deleteQuestion(e, index)}
              className="btn bg-danger border-none hover:bg-[#C30404]"
            >
              Hapus
            </button>
            <button className="btn bg-gray-200 text-black hover:bg-slate-300 border-none mr-3">
              <FaPlus className="w-3 h-3 mr-3" />
              Gambar
            </button>
          </div>
          <div className="flex flex-col gap-5 mt-3">
            {answersValue.map((item, i) => (
              <InputJawaban
                questionIndex={index}
                index={i}
                key={i}
                answerValue={item}
                storingAnswer={storingAnswer}
                storingCorrectAnswer={storingCorrectAnswer}
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
  storingAnswer: (questionIndex: number, i: number, value: string) => void;
  storingCorrectAnswer: (questionIndex: number, value: string) => void;
}

const InputJawaban = (props: InputJawabanProps) => {
  const {
    questionIndex,
    index,
    answerValue,
    storingAnswer,
    correctAns,
    storingCorrectAnswer,
  } = props;

  return (
    <>
      <div className="flex flex-row items-center">
        <div className="flex items-center justify-center rounded-full w-10 h-10 bg-background text-bold font-bold mr-5 aspect-square">
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
          onChange={(e) => storingAnswer(questionIndex, index, e.target.value)}
          placeholder="Type here"
          required
          className="input input-bordered w-full"
        />
        <input
          onChange={(e) => storingCorrectAnswer(questionIndex, e.target.value)}
          value={answerValue}
          checked={correctAns === answerValue}
          type="checkbox"
          className="checkbox ml-3"
        />
      </div>
    </>
  );
};
