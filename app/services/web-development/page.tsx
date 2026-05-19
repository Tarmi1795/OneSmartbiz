import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  createServiceMetadata,
  getRequiredService,
} from "@/lib/services";

export const metadata = createServiceMetadata("web-development");

export default function WebDevelopmentPage() {
  return <ServiceDetailPage service={getRequiredService("web-development")} />;
}
