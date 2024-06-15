type GenerateSvgDataUrl = (svg: string) => string;

const generateSvgDataUrl: GenerateSvgDataUrl = (svg) => {
	/*!
	 * SPDX-License-Identifier: MIT
	 *
	 * @file svg-to-data-uri.js {@link https://github.com/heyallan/svg-to-data-uri/}
	 *
	 * @author Allan Moreno
	 * @license MIT {@link https://github.com/heyallan/svg-to-data-uri/blob/master/LICENSE}
	 *
	 * Permission is hereby granted, free of charge, to any person obtaining a copy
	 * of this software and associated documentation files (the "Software"), to deal
	 * in the Software without restriction, including without limitation the rights
	 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	 * copies of the Software, and to permit persons to whom the Software is
	 * furnished to do so, subject to the following conditions:
	 *
	 * The above copyright notice and this permission notice shall be included in all
	 * copies or substantial portions of the Software.
	 *
	 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	 * SOFTWARE.
	 */
	svg = svg.trim();
	// remove xml, doctype, generator...
	svg = svg.slice(svg.indexOf('<svg'));
	// soft validate
	if (!svg.startsWith('<svg') || !svg.endsWith('svg>')) {
		return '';
	}
	// add namespace if necessary
	if (!svg.includes('http://www.w3.org/2000/svg')) {
		svg = svg.replace(/<svg/g, "<svg xmlns='http://www.w3.org/2000/svg'");
	}
	// remove comments
	svg = svg.replace(/<!--.{1,}-->/g, '');
	// remove unnecessary attributes
	svg = svg.replace(/version=["'](.{0,}?)["'](?=[\s>])/g, '');
	// replace nested quotes
	svg = svg.replace(/"'(.{1,})'"/g, "'$1'");
	// replace double quotes
	svg = svg.replace(/"/g, "'");
	// remove empty spaces between tags
	svg = svg.replace(/>\s{1,}</g, '><');
	// remove duplicate spaces
	svg = svg.replace(/\s{2,}/g, ' ');
	// trim again
	svg = svg.trim();
	// soft validate again
	if (!svg.startsWith('<svg') || !svg.endsWith('svg>')) {
		return '';
	}
	// replace ampersand
	svg = svg.replace(/&/g, '&amp;');
	// encode only unsafe symbols
	svg = svg.replace(/[%#<>?[\\\]^`{|}]/g, encodeURIComponent);
	// build data uri
	svg = `data:image/svg+xml,${svg}`;
	// ok, ship it!
	return svg;
};

export {type GenerateSvgDataUrl, generateSvgDataUrl};
