import {Location} from "@entities/location";

export interface Circuit {
  circuitId: string;
  url: string;
  circuitName: string;
  Location: Location
}
