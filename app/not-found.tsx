import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <div className="w-16 h-16 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-500 mb-6">
        <AlertCircle className="w-8 h-8" />
      </div>
      <h1 className="text-4xl font-extrabold font-title text-slate-900 dark:text-white mb-2">
        404 - Page Not Found
      </h1>
      <p className="text-slate-600 dark:text-slate-400 max-w-md text-sm leading-relaxed mb-8">
        お探しのページは削除されたか、URLが変更された可能性があります。
      </p>
      <Link href="/">
        <Button variant="primary" size="md">
          <ArrowLeft className="w-4 h-4" />
          <span>ホームへ戻る</span>
        </Button>
      </Link>
    </div>
  );
}
