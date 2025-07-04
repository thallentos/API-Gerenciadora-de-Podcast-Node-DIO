import { IncomingMessage } from "http";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { FilterPodcastModel } from "../models/filter-podcast-model";

export const serviceFilterEpisodes = async (
  podcastName: string | undefined
) => {

  let responseFormat: FilterPodcastModel = {
    statusCode: 200,
    body: [],
  };

  const queryString = podcastName?.split("?")[1].split("=")[1];
  const data = await repositoryPodcast(queryString);

  return data;
};
