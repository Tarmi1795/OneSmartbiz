import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  createServiceMetadata,
  getRequiredService,
} from "@/lib/services";

export const metadata = createServiceMetadata("financial-services");

export default function FinancialServicesPage() {
  return <ServiceDetailPage service={getRequiredService("financial-services")} />;
}
