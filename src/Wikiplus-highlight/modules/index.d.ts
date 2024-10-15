import 'types-mediawiki-renovate';
import type * as Monaco from 'monaco-editor';
import type {CodeMirror6} from '@bhsd/codemirror-mediawiki';

interface CodeMirror extends CodeMirror6 {
	editor?: Monaco.editor.IStandaloneCodeEditor;
}

interface CodeMirrorStatic {
	fromTextArea(textarea: HTMLTextAreaElement, lang?: string, ns?: number, page?: string): Promise<CodeMirror>;
}

type WikiplusPages = Record<number, {title: string; sectionCache: Record<string, string>}>;

declare global {
	interface Window {
		CodeMirror6: Promise<CodeMirrorStatic> | undefined;
	}

	// eslint-disable-next-line no-shadow
	const CodeMirror6: CodeMirrorStatic | Promise<CodeMirrorStatic>;

	const monaco: typeof Monaco;

	const _WikiplusPages: WikiplusPages | undefined;
	const Pages: WikiplusPages | undefined;
}

export {};
