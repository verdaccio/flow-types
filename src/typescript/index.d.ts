type StringValue = string | void | null;
type verdaccio$Callback = Function;
type verdaccio$StorageList = Array<string>;

declare namespace Verdaccio {
	type Author = {
		name: string;
		email: string;
	}

	type Dist = {
		integrity?: string;
		shasum: string;
		tarball: string;
	}

	interface LocalStorage {
		list: any;
		secret: string;
	}



}

declare module "@verdaccio/types" {
	export = Verdaccio;
}