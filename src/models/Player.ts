
export interface IPlayer {
    assists: number;
    bonus: number;
    bps: number;
    chance_of_playing_next_round: number;
    chance_of_playing_this_round: number;
    clean_sheets: number;
    corners_and_indirect_freekicks_order: number;
    corners_and_indirect_freekicks_text: string;
    cost_change_event: number;
    cost_change_event_fall: number;
    cost_change_start: number;
    cost_change_start_fall: number;
    creativity: string;
    creativity_rank: number;
    creativity_rank_type: number;
    direct_freekicks_order: number;
    direct_freekicks_text:string;
    dreamteam_count: number;
    element_type: number;
    ep_next: string;
    ep_this: string;
    event_points: number;
    first_name: string;
    form: string;
    goals_conceded: string
    goals_scored: number;
    ict_index: string
    ict_index_rank: number;
    ict_index_rank_type: number;
    id: number;
    in_dreamteam: boolean;
    influence: string;
    influence_rank: number;
    influence_rank_type: number;
    minutes: number;
    news: string;
    news_added: Date;
    now_cost: number;
    own_goals: number;
    penalties_missed: number;
    penalties_order: number;
    penalties_saved: number;
    penalties_text: string;
    photo: string;
    points_per_game: string;
    red_cards: number;
    saves: number
    second_name: string;
    selected_by_percent: string;
    special: boolean;
    squad_number: number;
    status: string;
    team: number;
    team_code: number;
    threat: string;
    threat_rank: number;
    threat_rank_type: number;
    total_points: number;
    transfers_in: number
    transfers_in_event: number
    transfers_out: number
    transfers_out_event: number
    value_form: string;
    value_season: string;
    web_name: string;
}

export class Player {

    constructor() {

    }

    
}
