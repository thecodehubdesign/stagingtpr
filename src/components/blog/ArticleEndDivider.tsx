import { Sparkles } from 'lucide-react';

const ArticleEndDivider = () => {
  return (
    <div className="my-12 flex items-center justify-center">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-fuchsia-500/50 to-transparent"></div>
      <div className="px-6 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-fuchsia-500 animate-pulse"></div>
        <Sparkles className="w-6 h-6 text-fuchsia-400" />
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </div>
  );
};

export default ArticleEndDivider;
