export interface User {
    progress?: Progress;
    _id?:      string;
    userId?:   string;
    name?:     string;
    lastName?: string;
    email:    string;
    password: string;
    isAdmin?:  boolean;
    github?:   string;
    __v?:      number;
}

export interface Progress {
    exercises: Exercise[];
    theory:    Exercise[];
    videos:    Exercise[];
}

export interface Exercise {
    _id:       string;
    topic:     string;
    resources: string[];
    status:    string;
    tasks:     any[];
}


