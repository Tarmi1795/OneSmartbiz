import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  createServiceMetadata,
  getRequiredService,
} from "@/lib/services";

export const metadata = createServiceMetadata("business-formation");

export default function BusinessFormationPage() {
  return <ServiceDetailPage service={getRequiredService("business-formation")} />;
}
