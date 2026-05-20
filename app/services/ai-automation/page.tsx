import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  createServiceMetadata,
  getRequiredService,
} from "@/lib/services";

export const metadata = createServiceMetadata("ai-automation");

export default function AiAutomationPage() {
  return <ServiceDetailPage service={getRequiredService("ai-automation")} />;
}
