import { IncomingMessage, ServerResponse } from "http";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  res.writeHead(200, {
    "Content-Type": "application/json",
  });
  res.end(
    JSON.stringify([
      {
        podcastName: "flow",
        episode: "DILERA - Flow #375",
        videoId: "LbBNooBc-E8",
        categories: ["deficiência", "tourette"],
      },
    ])
  );
};
