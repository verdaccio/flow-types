type StringValue = string | void | null;

declare namespace Verdaccio {
	type StorageList = Array<string>;
	type Callback = Function;
	type Author = {
		name: string;
		email: string;
	}

	type Dist = {
		integrity?: string;
		shasum: string;
		tarball: string;
	}

	type RemoteUser = {
		real_groups: Array<string>;
		groups: Array<string>;
		name: string | void;
		error?: string;
	}

	interface LocalStorage {
		list: any;
		secret: string;
	}

	type Version = {
		name: string,
		version: string,
		devDependencies: string,
		directories: any,
		dist: Dist,
		author: string,
		main: string,
		homemage: string,
		license: string,
		readme: string,
		readmeFileName: string,
		description: string,
		bin: string,
		bugs: any,
		files: Array<string>,
		gitHead: string,
		maintainers: Array<Author>,
		repository: string | any,
		scripts: any,
		homepage: string,
		dist: Dist,
		readmeFilename: string;
		etag: string;
		contributors: Array<Author>,
		dependencies: any,
		keywords: string | Array<string>,
		_id: string,
		nodeVersion: string,
		_npmUser: Author,
		_hasShrinkwrap: boolean
	};

	type Logger = {
		child: (conf: any) => any;
		debug: (conf: any, template?: mixed) => void;
		error: (conf: any, template?: mixed) => void;
		http: (conf: any, template?: mixed) => void;
		trace: (conf: any, template?: mixed) => void;
		warn: (conf: any, template?: mixed) => void;
		info: (conf: any, template?: mixed) => void;
	}

	type Versions = {
		[key: string]: Version;
	}

	type DistFile = {
		url: string;
		sha: string;
		registry?: string;
	}

	type MergeTags = {
		[key: string]: string;
	}

	type DistFiles = {
		[key: string]: DistFile;
	}

	type AttachMents = {
		[key: string]: Version;
	}

	type GenericBody = {
		[key: string]: string;
	}
}

declare module "@verdaccio/types" {
	export = Verdaccio;
}