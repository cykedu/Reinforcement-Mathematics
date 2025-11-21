import React, { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { SYLLABUS } from '../data/syllabus';
import LessonCard from '../components/LessonCard';
import MathVisuals from '../components/MathVisuals';
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react';

const ChapterView: React.FC = () => {
  const { formId, chapterId } = useParams();
  const navigate = useNavigate();
  const scrollRef = useRef<HTMLDivElement>(null);

  const form = SYLLABUS.find((f) => f.id === Number(formId));
  const chapter = form?.chapters.find((c) => c.id === Number(chapterId));

  // Reset scroll on chapter change
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [formId, chapterId]);

  if (!form || !chapter) {
    return (
        <div className="flex flex-col items-center justify-center h-64 text-center">
            <h2 className="text-2xl font-bold text-slate-800 mb-2">Chapter not found</h2>
            <p className="text-slate-500 mb-4">The requested chapter does not exist.</p>
            <button onClick={() => navigate('/')} className="text-indigo-600 hover:underline">Go Home</button>
        </div>
    );
  }

  // Navigation Logic
  const currentChapterIndex = form.chapters.findIndex(c => c.id === chapter.id);
  const prevChapter = currentChapterIndex > 0 ? form.chapters[currentChapterIndex - 1] : null;
  const nextChapter = currentChapterIndex < form.chapters.length - 1 ? form.chapters[currentChapterIndex + 1] : null;

  const goToChapter = (cId: number) => {
      navigate(`/chapter/${form.id}/${cId}`);
  };

  return (
    <div className="space-y-8" ref={scrollRef}>
      {/* Header */}
      <div className="bg-indigo-600 rounded-2xl p-6 md:p-10 text-white shadow-lg shadow-indigo-900/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10 transform translate-x-10 -translate-y-10">
            <BookOpen size={200} />
        </div>
        <div className="relative z-10">
            <div className="flex items-center gap-2 text-indigo-200 mb-2 text-sm uppercase tracking-wider font-semibold">
                <span>{form.name}</span>
                <span>•</span>
                <span>Chapter {chapter.id}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">{chapter.title}</h1>
            <p className="text-indigo-100 text-lg max-w-2xl leading-relaxed">{chapter.description}</p>
        </div>
      </div>

      {/* Visualization Section (if available) */}
      {chapter.visualization !== 'none' && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <MathVisuals type={chapter.visualization} />
        </div>
      )}

      {/* Lessons Grid */}
      <div className="grid grid-cols-1 gap-6">
        {chapter.topics.map((topic, index) => (
          <LessonCard key={index} topic={topic} index={index} />
        ))}
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-200">
        <button 
            onClick={() => prevChapter && goToChapter(prevChapter.id)}
            disabled={!prevChapter}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                prevChapter 
                ? 'text-slate-600 hover:bg-slate-100 hover:text-indigo-600' 
                : 'text-slate-300 cursor-not-allowed'
            }`}
        >
            <ArrowLeft className="w-4 h-4" />
            <div className="text-left">
                <span className="block text-xs font-semibold text-slate-400">Previous</span>
                <span className="block font-medium">{prevChapter ? `Chapter ${prevChapter.id}` : 'Start'}</span>
            </div>
        </button>

        <button 
             onClick={() => nextChapter && goToChapter(nextChapter.id)}
             disabled={!nextChapter}
             className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                nextChapter
                ? 'text-slate-600 hover:bg-slate-100 hover:text-indigo-600'
                : 'text-slate-300 cursor-not-allowed'
            }`}
        >
             <div className="text-right">
                <span className="block text-xs font-semibold text-slate-400">Next</span>
                <span className="block font-medium">{nextChapter ? `Chapter ${nextChapter.id}` : 'End'}</span>
            </div>
            <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default ChapterView;