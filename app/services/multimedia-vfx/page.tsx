import ServiceDetailPage from "@/components/ServiceDetailPage";
import {
  createServiceMetadata,
  getRequiredService,
} from "@/lib/services";

export const metadata = createServiceMetadata("multimedia-vfx");

export default function MultimediaVFXPage() {
  return <ServiceDetailPage service={getRequiredService("multimedia-vfx")} />;
}
