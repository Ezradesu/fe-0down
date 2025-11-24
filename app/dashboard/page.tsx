"use client";
import { Wrench } from "lucide-react";
import { EquipmentAlert } from "@/components/equipment-alert";
import { RecommendedActionsHeader } from "@/components/recommended-action";
import { Chat } from "@/components/ui/chat";
// import { MaintenanceChat } from "@/components/maintenance-chat";

// import { useChat } from "ai/react";

export default function Home() {
  const alerts = [
    {
      id: 1,
      equipmentName: "Motor Conveyor A-12",
      variant: "critical" as const,
      description: "Vibration level mencapai 85% threshold",
      action:
        "Segera lakukan inspeksi bearing dan ganti jika perlu. Estimasi downtime: 2 jam.",
      additionalBadges: ["critical"],
      actionButtonLabel: "Reset",
    },
    {
      id: 2,
      equipmentName: "Pump Station B-05",
      variant: "warning" as const,
      description: "Suhu operasi naik 15°C dari normal",
      action:
        "Periksa sistem cooling dan level oli. Jadwalkan maintenance dalam 48 jam.",
      additionalBadges: ["warning", "Pending"],
      actionButtonLabel: "Start Repair",
    },
    {
      id: 3,
      equipmentName: "Compressor C-03",
      variant: "warning" as const,
      description: "Pola konsumsi energi tidak normal",
      action:
        "Lakukan cleaning filter dan cek tekanan sistem. Monitoring lanjutan diperlukan.",
      additionalBadges: ["warning", "Pending"],
      actionButtonLabel: "Start Repair",
    },
  ];

  //   const { messages, input, handleInputChange, handleSubmit, status, stop } =
  //     useChat();

  const isLoading = status === "submitted" || status === "streaming";

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center gap-2">
        <Wrench className="h-6 w-6 text-blue-600" />
        <h1 className="text-2xl font-bold text-gray-900">
          Predictive Maintenance Copilot
        </h1>
      </div>

      {/* Main content - Split layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left column - Recommended Actions */}
        <div className="col-span-2 space-y-4">
          <RecommendedActionsHeader />
          <div className="space-y-3">
            {alerts.map((alert) => (
              <EquipmentAlert
                key={alert.id}
                equipmentName={alert.equipmentName}
                variant={alert.variant}
                description={alert.description}
                action={alert.action}
                actionButtonLabel={alert.actionButtonLabel}
                onActionClick={() =>
                  console.log(`Action clicked for ${alert.equipmentName}`)
                }
              />
            ))}
          </div>
        </div>

        {/* Right column - Maintenance Assistant Chat */}
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Wrench className="h-5 w-5 text-blue-600" />
            <h2 className="text-lg font-semibold text-gray-900">
              Maintenance Assistant
            </h2>
          </div>
          {/* <MaintenanceChat /> */}
          <Chat
            messages={messages}
            input={input}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            isGenerating={isLoading}
            stop={stop}
          />
        </div>
      </div>
    </main>
  );
}
