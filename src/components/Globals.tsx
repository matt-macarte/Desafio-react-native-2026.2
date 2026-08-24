export interface CanonicalHour {
	id: number;
	name: string;
	defaultHour: string;
}

export const CANONICAL_HOURS: Record<string, CanonicalHour> = {
	NOCTURNS: { id: 1, name: "Nocturns", defaultHour: "00:00" },
	LAUDS: { id: 2, name: "Lauds", defaultHour: "03:00" },
	PRIME: { id: 3, name: "Prime", defaultHour: "06:00" },
	TERCE: { id: 4, name: "Terce", defaultHour: "09:00" },
	SEXT: { id: 5, name: "Sext", defaultHour: "12:00" },
	NONES: { id: 6, name: "Nones", defaultHour: "15:00" },
	VESPERS: { id: 7, name: "Vespers", defaultHour: "18:00" },
	COMPLINE: { id: 8, name: "Compline", defaultHour: "21:00" },
};

export const CANONICAL_HOURS_OPTIONS: CanonicalHour[] =
	Object.values(CANONICAL_HOURS);

//
// dados das ações
export interface Action {
	id: number;
	name: string;
	durationInMinutes: number;
}

// dados das rotinas
export interface Routine {
	id: number;
	name: string;
	description?: string;
	canonicalHour?: string | CanonicalHour | null;
	actions: Action[];
	totalDurationInMinutes?: number;
}
