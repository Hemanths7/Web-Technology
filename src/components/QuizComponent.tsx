import React, { useState } from 'react';
import { QuizQuestion } from '../types';
import { CheckCircle2, XCircle, HelpCircle, ArrowRight, ArrowLeft, RotateCcw, Lightbulb } from 'lucide-react';

interface QuizComponentProps {
  questions: QuizQuestion[];
  topicTitle: string;
}

export const QuizComponent: React.FC<QuizComponentProps> = ({ questions, topicTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userScore, setUserScore] = useState(0);
  const [answeredMap, setAnsweredMap] = useState<Record<number, { selected: number; isCorrect: boolean }>>({});

  if (!questions || questions.length === 0) {
    return null;
  }

  const currentQ = questions[currentIndex];
  const total = questions.length;

  const handleSelect = (idx: number) => {
    if (!isSubmitted && !showAnswer) {
      setSelectedOption(idx);
    }
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    const correct = selectedOption === currentQ.correctAnswer;
    if (correct && !answeredMap[currentIndex]) {
      setUserScore((s) => s + 1);
    }
    setAnsweredMap((prev) => ({
      ...prev,
      [currentIndex]: { selected: selectedOption, isCorrect: correct },
    }));
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setIsSubmitted(true);
  };

  const handleNext = () => {
    if (currentIndex < total - 1) {
      setCurrentIndex((prev) => prev + 1);
      const nextAnswer = answeredMap[currentIndex + 1];
      if (nextAnswer) {
        setSelectedOption(nextAnswer.selected);
        setIsSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsSubmitted(false);
      }
      setShowAnswer(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      const prevAnswer = answeredMap[currentIndex - 1];
      if (prevAnswer) {
        setSelectedOption(prevAnswer.selected);
        setIsSubmitted(true);
      } else {
        setSelectedOption(null);
        setIsSubmitted(false);
      }
      setShowAnswer(false);
    }
  };

  const handleResetQuiz = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setShowAnswer(false);
    setUserScore(0);
    setAnsweredMap({});
  };

  const isCurrentCorrect = isSubmitted && selectedOption === currentQ.correctAnswer;
  const isCurrentWrong = isSubmitted && selectedOption !== null && selectedOption !== currentQ.correctAnswer;

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden my-6 shadow-sm">
      {/* Quiz Top Header */}
      <div className="bg-slate-50 px-5 py-3.5 border-b border-slate-200 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-amber-600" />
          <h4 className="text-sm font-bold text-slate-900">
            Interactive Checkpoint Quiz: {topicTitle}
          </h4>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-sky-800 bg-sky-50 border border-sky-200 px-2.5 py-1 rounded-full">
            Question {currentIndex + 1} of {total}
          </span>
          <span className="text-xs font-semibold text-slate-600">
            Score: <strong className="text-emerald-700 font-bold">{userScore}</strong> / {total}
          </span>
        </div>
      </div>

      {/* Question Body */}
      <div className="p-5 md:p-6 space-y-4 text-slate-800">
        <div className="text-base font-bold text-slate-900 leading-relaxed">
          {currentQ.question}
        </div>

        {/* Optional code snippet included in question */}
        {currentQ.codeSnippet && (
          <div className="bg-slate-900 p-3.5 rounded-lg border border-slate-800 font-mono text-xs text-sky-300 whitespace-pre-wrap leading-relaxed shadow-inner">
            {currentQ.codeSnippet}
          </div>
        )}

        {/* Multiple choice options */}
        <div className="space-y-2.5 pt-2">
          {currentQ.options.map((option, idx) => {
            const isSelected = selectedOption === idx;
            const isThisCorrect = currentQ.correctAnswer === idx;

            let optionStyle =
              'border-slate-200 bg-slate-50/70 hover:bg-slate-100 text-slate-800 hover:border-slate-300';

            if (isSelected && !isSubmitted && !showAnswer) {
              optionStyle = 'border-sky-500 bg-sky-50/80 text-sky-950 font-medium shadow-sm ring-1 ring-sky-500/30';
            } else if ((isSubmitted || showAnswer) && isThisCorrect) {
              optionStyle = 'border-emerald-500 bg-emerald-50 text-emerald-950 font-semibold ring-1 ring-emerald-500/40';
            } else if (isSubmitted && isSelected && !isThisCorrect) {
              optionStyle = 'border-rose-500 bg-rose-50 text-rose-950 ring-1 ring-rose-500/40';
            }

            return (
              <label
                key={idx}
                onClick={() => handleSelect(idx)}
                className={`flex items-start gap-3 p-3.5 rounded-lg border cursor-pointer transition-all ${optionStyle}`}
              >
                <div className="pt-0.5 shrink-0">
                  <div
                    className={`w-4 h-4 rounded-full border flex items-center justify-center transition-colors ${
                      isSelected
                        ? isSubmitted
                          ? isThisCorrect
                            ? 'border-emerald-600 bg-emerald-600 text-white'
                            : 'border-rose-600 bg-rose-600 text-white'
                          : 'border-sky-600 bg-sky-600 text-white'
                        : 'border-slate-400 bg-white'
                    }`}
                  >
                    {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                  </div>
                </div>
                <div className="text-sm flex-1 leading-normal font-medium">{option}</div>
                {/* Result icons */}
                {(isSubmitted || showAnswer) && isThisCorrect && (
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 self-center" />
                )}
                {isSubmitted && isSelected && !isThisCorrect && (
                  <XCircle className="w-4 h-4 text-rose-600 shrink-0 self-center" />
                )}
              </label>
            );
          })}
        </div>

        {/* Action Controls: Show Answer, Submit, Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-2">
            <button
              onClick={handleShowAnswer}
              disabled={showAnswer}
              className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-1.5"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
              <span>Show Answer</span>
            </button>

            <button
              onClick={handleSubmit}
              disabled={selectedOption === null || isSubmitted}
              className="px-4 py-1.5 rounded-lg text-xs font-bold bg-sky-600 text-white hover:bg-sky-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
            >
              Submit
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-200 transition-colors"
              title="Previous Question"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <span className="text-xs text-slate-500 font-mono font-bold">
              {currentIndex + 1} / {total}
            </span>
            <button
              onClick={handleNext}
              disabled={currentIndex === total - 1}
              className="p-1.5 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 disabled:opacity-30 disabled:cursor-not-allowed border border-slate-200 transition-colors"
              title="Next Question"
            >
              <ArrowRight className="w-4 h-4" />
            </button>

            {Object.keys(answeredMap).length === total && (
              <button
                onClick={handleResetQuiz}
                title="Restart Quiz"
                className="ml-2 text-xs flex items-center gap-1 text-sky-700 font-semibold hover:text-sky-800"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retry</span>
              </button>
            )}
          </div>
        </div>

        {/* Explanation Card upon submission or show answer */}
        {(isSubmitted || showAnswer) && (
          <div
            className={`p-4 rounded-lg border text-xs leading-relaxed transition-all ${
              isCurrentCorrect
                ? 'bg-emerald-50 border-emerald-300 text-emerald-950'
                : 'bg-amber-50/80 border-amber-300 text-amber-950'
            }`}
          >
            <div className="font-bold flex items-center gap-1.5 mb-1 text-sm">
              {isCurrentCorrect ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-800">Correct Answer!</span>
                </>
              ) : isCurrentWrong ? (
                <>
                  <XCircle className="w-4 h-4 text-rose-600" />
                  <span className="text-rose-800">Not quite! Correct answer is: Option {currentQ.correctAnswer + 1}</span>
                </>
              ) : (
                <>
                  <Lightbulb className="w-4 h-4 text-amber-600" />
                  <span className="text-amber-800">Answer: Option {currentQ.correctAnswer + 1}</span>
                </>
              )}
            </div>
            <p className="text-slate-700">{currentQ.explanation}</p>
          </div>
        )}
      </div>
    </div>
  );
};
