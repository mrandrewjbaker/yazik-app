export interface ILanguageTopicStage {
  stageId: number;
  vocabulux: string[];
}

export interface ILanguageTopic {
  name: string;
  slug: string;
  stages: ILanguageTopicStage[];
}