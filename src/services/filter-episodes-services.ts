import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
) => {
  const queryString = podcastName?.split("?")[1].split("=")[1];
  const data = await repositoryPodcast(queryString);

  return data;
};
