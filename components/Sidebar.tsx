import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { SYLLABUS } from '../data/syllabus';
import { ChevronDown, ChevronRight, X, BookOpen } from 'lucide-react';

const Sidebar: React.FC<{ mobileOpen: boolean; setMobileOpen: (open: boolean) => void }> = ({ mobileOpen, setMobileOpen }) => {
  const [expandedForm, setExpandedForm] = useState<number | null>(4);

  const toggleForm = (id: number) => {
    setExpandedForm(expandedForm === id ? null : id);
  };

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      <div className="p-6 flex items-center justify-between border-b border-slate-700 bg-slate-900">
        <div className="flex items-center space-x-3">
            <div className="bg-indigo-500 p-2 rounded-lg">
                <BookOpen className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">MathGuru</span>
        </div>
        <button className="md:hidden text-slate-400" onClick={() => setMobileOpen(false)}>
          <X className="w-6 h-6" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto py-4 px-3 space-y-2 bg-slate-900 custom-scrollbar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center px-4 py-3 rounded-lg transition-all duration-200 ${
              isActive ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50' : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`
          }
          onClick={() => setMobileOpen(false)}
        >
          <span className="font-medium">Dashboard</span>
        </NavLink>

        {SYLLABUS.map((form) => (
          <div key={form.id} className="rounded-xl overflow-hidden">
            <button
              onClick={() => toggleForm(form.id)}
              className="w-full flex items-center justify-between px-4 py-3 bg-slate-800/50 hover:bg-slate-800 text-slate-200 transition-colors"
            >
              <span className="font-semibold text-sm uppercase tracking-wider text-slate-400">{form.name}</span>
              {expandedForm === form.id ? (
                <ChevronDown className="w-4 h-4 text-slate-500" />
              ) : (
                <ChevronRight className="w-4 h-4 text-slate-500" />
              )}
            </button>

            {expandedForm === form.id && (
              <div className="mt-1 space-y-1">
                {form.chapters.map((chapter) => (
                  <NavLink
                    key={chapter.id}
                    to={`/chapter/${form.id}/${chapter.id}`}
                    className={({ isActive }) =>
                      `block px-4 py-2.5 text-sm rounded-lg ml-2 border-l-2 transition-all duration-200 ${
                        isActive
                          ? 'border-indigo-500 bg-slate-800 text-indigo-400 font-medium'
                          : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                      }`
                    }
                    onClick={() => setMobileOpen(false)}
                  >
                    <div className="flex items-start">
                        <span className="mr-2 opacity-50">{chapter.id}.</span>
                        <span className="line-clamp-1">{chapter.title}</span>
                    </div>
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="p-4 border-t border-slate-800 bg-slate-900 text-xs text-slate-500 text-center">
        SPM KSSM Syllabus
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Backdrop */}
      {mobileOpen && (
        <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-50 w-72 h-screen transition-transform duration-300 bg-slate-900 text-white md:hidden ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>

      {/* Desktop Sidebar */}
      <aside className="hidden md:block w-72 h-screen bg-slate-900 text-white sticky top-0 border-r border-slate-800 shadow-xl z-20">
        <SidebarContent />
      </aside>
    </>
  );
};

export default Sidebar;