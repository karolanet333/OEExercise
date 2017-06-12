import { LiveClass } from './live-class';
import { Lesson } from './lesson';

export class StudyBundleReturn{
    constructor(
        public items: Lesson[],
        public liveClasses: LiveClass[]
    ){
    }

    public static fromJson(json: any): StudyBundleReturn{

        return new StudyBundleReturn(
            Lesson.fromJsonArray(json.items),
            LiveClass.fromJsonArray(json.liveClasses)
        );

    }
}