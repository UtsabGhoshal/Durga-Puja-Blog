import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleMapsAutocomplete, handleNearbyPlaces } from "./routes/maps";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Google Maps API routes
  app.post("/api/maps/autocomplete", handleMapsAutocomplete);
  app.post("/api/maps/nearby", handleNearbyPlaces);

  return app;
}
