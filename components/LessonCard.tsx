import React from 'react';
import { Topic } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  topic: Topic;
  index: number;
}

const LessonCard: React.FC<Props> = ({ topic, index }) => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold text-sm">
          {index + 1}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-bold text-slate-800 mb-3">{topic.title}</h3>
          <ul className="space-y-3">
            {topic.details.map((detail, i) => (
              <li key={i} className="flex items-start gap-2 text-slate-600 text-sm leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LessonCard;