export interface IPickALanguageActiveLearningLanguagePackTopicStage {
  stageId: number;
  vocabulux: string[];
}

export interface IPickALanguageActiveLearningLanguagePackTopic {
  name: string;
  slug: string;
  stages: IPickALanguageActiveLearningLanguagePackTopicStage[];
}