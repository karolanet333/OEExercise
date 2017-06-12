export class SocialInfo{

    constructor(
        public level: number,
        public unit: number,
        public rewards: number,
        public friends: number
    ){
    }

    public static fromJson(item){

        return new SocialInfo(
            item.level, 
            item.unit, 
            item.rewards, 
            item.friends
        );
    }

    public static fromJsonArray(json: any[]): SocialInfo[]{
        return json.map(SocialInfo.fromJson);
    }
    
}