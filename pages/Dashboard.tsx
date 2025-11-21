import React from 'react';
import { SYLLABUS } from '../data/syllabus';
import { Link } from 'react-router-dom';
import { ArrowRight, Book, Calculator, Sigma } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-10">
      <div className="text-center py-10 md:py-16 space-y-4">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-indigo-600 text-white shadow-lg shadow-indigo-500/30 mb-4">
            <Calculator className="w-8 h-8" />
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">Master SPM Mathematics</h1>
        <p className="text-slate-600 text-lg md:text-xl max-w-2xl mx-auto">
          Your complete offline companion for Form 4 and Form 5 Modern Mathematics (KSSM).
          Interactive graphs, concise notes, and clear examples.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SYLLABUS.map((form) => (
          <div key={form.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="bg-slate-50 border-b border-slate-100 p-6 flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                    <span className="bg-indigo-100 text-indigo-700 py-1 px-3 rounded text-sm font-extrabold">F{form.id}</span>
                    {form.name}
                </h2>
                <Sigma className="w-5 h-5 text-slate-400" />
            </div>
            <div className="p-6">
                <div className="space-y-3">
                    {form.chapters.slice(0, 5).map((chapter) => (
                        <Link 
                            key={chapter.id} 
                            to={`/chapter/${form.id}/${chapter.id}`}
                            className="flex items-center justify-between group p-2 hover:bg-slate-50 rounded-lg transition-colors"
                        >
                            <div className="flex items-center gap-3 overflow-hidden">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                                    {chapter.id}
                                </span>
                                <span className="text-slate-600 font-medium truncate group-hover:text-indigo-700 transition-colors">
                                    {chapter.title}
                                </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-500 transform group-hover:translate-x-1 transition-all" />
                        </Link>
                    ))}
                    {form.chapters.length > 5 && (
                        <div className="pt-2 pl-11 text-sm text-slate-400 italic">
                            + {form.chapters.length - 5} more chapters...
                        </div>
                    )}
                </div>
                <div className="mt-6 pt-6 border-t border-slate-100">
                    <Link 
                        to={`/chapter/${form.id}/1`}
                        className="block w-full py-3 text-center bg-white border border-slate-300 text-slate-700 font-semibold rounded-lg hover:bg-slate-50 hover:border-slate-400 transition-all active:scale-[0.98]"
                    >
                        Start Form {form.id}
                    </Link>
                </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white text-center">
        <h3 className="text-2xl font-bold mb-4">Ready to improve your grades?</h3>
        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Consistency is key. Start with a single chapter today and track your progress through the KSSM syllabus.
        </p>
        <Link 
            to="/chapter/4/1" 
            className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-400 text-white px-8 py-3 rounded-full font-bold transition-colors shadow-lg shadow-indigo-900/50"
        >
            <Book className="w-5 h-5" />
            Start Learning Now
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;