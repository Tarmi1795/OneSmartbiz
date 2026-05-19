import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  createServiceMetadata,
  getRequiredService,
} from "@/lib/services";

export const metadata = createServiceMetadata("visa-assistance");

export default function VisaAssistancePage() {
  return <ServiceDetailPage service={getRequiredService("visa-assistance")} />;
}
