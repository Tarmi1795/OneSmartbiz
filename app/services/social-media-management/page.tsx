import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  createServiceMetadata,
  getRequiredService,
} from "@/lib/services";

export const metadata = createServiceMetadata("social-media-management");

export default function SocialMediaManagementPage() {
  return <ServiceDetailPage service={getRequiredService("social-media-management")} />;
}
