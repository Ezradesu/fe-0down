import { AlertTriangle } from "lucide-react";

export function RecommendedActionsHeader() {
  return (
    <div className="flex items-center gap-2">
      <AlertTriangle className="h-5 w-5 text-orange-500" />
      <h2 className="text-lg font-semibold text-gray-900">
        Recommended Actions
      </h2>
    </div>
  );
}
