import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, h as claim_text, f as detach_dev, g as claim_space, j as attr_dev, k as add_location, y as set_style, l as insert_dev, m as append_dev, n as noop } from './client.950ac7a3.js';

/* src/components/99-Credits.svelte generated by Svelte v3.26.0 */

const file = "src/components/99-Credits.svelte";

function create_fragment(ctx) {
	let footer;
	let p0;
	let t0;
	let a0;
	let t1;
	let t2;
	let p1;
	let t3;
	let t4;
	let div;
	let a1;
	let img;
	let img_src_value;

	const block = {
		c: function create() {
			footer = element("footer");
			p0 = element("p");
			t0 = text("desarrollado con ❤️ por\n    ");
			a0 = element("a");
			t1 = text("Alcibíades");
			t2 = space();
			p1 = element("p");
			t3 = text("versión 1.1.0");
			t4 = space();
			div = element("div");
			a1 = element("a");
			img = element("img");
			this.h();
		},
		l: function claim(nodes) {
			footer = claim_element(nodes, "FOOTER", { class: true });
			var footer_nodes = children(footer);
			p0 = claim_element(footer_nodes, "P", { class: true });
			var p0_nodes = children(p0);
			t0 = claim_text(p0_nodes, "desarrollado con ❤️ por\n    ");
			a0 = claim_element(p0_nodes, "A", { href: true, target: true, class: true });
			var a0_nodes = children(a0);
			t1 = claim_text(a0_nodes, "Alcibíades");
			a0_nodes.forEach(detach_dev);
			p0_nodes.forEach(detach_dev);
			t2 = claim_space(footer_nodes);
			p1 = claim_element(footer_nodes, "P", { class: true });
			var p1_nodes = children(p1);
			t3 = claim_text(p1_nodes, "versión 1.1.0");
			p1_nodes.forEach(detach_dev);
			t4 = claim_space(footer_nodes);
			div = claim_element(footer_nodes, "DIV", { class: true });
			var div_nodes = children(div);
			a1 = claim_element(div_nodes, "A", { rel: true, href: true });
			var a1_nodes = children(a1);
			img = claim_element(a1_nodes, "IMG", { alt: true, style: true, src: true });
			a1_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			footer_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(a0, "href", "https://www.linkedin.com/in/alcibiadesc/");
			attr_dev(a0, "target", "#blank");
			attr_dev(a0, "class", "lookhere");
			add_location(a0, file, 4, 4, 114);
			attr_dev(p0, "class", " tc courier fw1 pt3");
			add_location(p0, file, 2, 2, 50);
			attr_dev(p1, "class", " tc courier fw1");
			add_location(p1, file, 12, 2, 253);
			attr_dev(img, "alt", "Licencia de Creative Commons");
			set_style(img, "border-width", "0");
			if (img.src !== (img_src_value = "https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png")) attr_dev(img, "src", img_src_value);
			add_location(img, file, 16, 6, 419);
			attr_dev(a1, "rel", "license");
			attr_dev(a1, "href", "http://creativecommons.org/licenses/by-nc-sa/4.0/");
			add_location(a1, file, 15, 4, 338);
			attr_dev(div, "class", " tc courier fw3 f6");
			add_location(div, file, 14, 2, 301);
			attr_dev(footer, "class", " bt b--black-05 mv4 mid-gray ");
			add_location(footer, file, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, footer, anchor);
			append_dev(footer, p0);
			append_dev(p0, t0);
			append_dev(p0, a0);
			append_dev(a0, t1);
			append_dev(footer, t2);
			append_dev(footer, p1);
			append_dev(p1, t3);
			append_dev(footer, t4);
			append_dev(footer, div);
			append_dev(div, a1);
			append_dev(a1, img);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(footer);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("_99_Credits", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<_99_Credits> was created with unknown prop '${key}'`);
	});

	return [];
}

class _99_Credits extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "_99_Credits",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/1-Title.svelte generated by Svelte v3.26.0 */

const file$1 = "src/components/1-Title.svelte";

function create_fragment$1(ctx) {
	let div;
	let a;
	let h1;
	let t0;
	let t1;
	let h2;
	let t2;
	let span0;
	let t3;
	let t4;
	let span1;
	let t5;

	const block = {
		c: function create() {
			div = element("div");
			a = element("a");
			h1 = element("h1");
			t0 = text("Ant Hill");
			t1 = space();
			h2 = element("h2");
			t2 = text("Un framework para generar\n    ");
			span0 = element("span");
			t3 = text("feedback loops");
			t4 = text("\n    orientados a la aportación continua de\n    ");
			span1 = element("span");
			t5 = text("valor");
			this.h();
		},
		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { class: true, id: true });
			var div_nodes = children(div);
			a = claim_element(div_nodes, "A", { href: true, class: true });
			var a_nodes = children(a);
			h1 = claim_element(a_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t0 = claim_text(h1_nodes, "Ant Hill");
			h1_nodes.forEach(detach_dev);
			a_nodes.forEach(detach_dev);
			t1 = claim_space(div_nodes);
			h2 = claim_element(div_nodes, "H2", { class: true });
			var h2_nodes = children(h2);
			t2 = claim_text(h2_nodes, "Un framework para generar\n    ");
			span0 = claim_element(h2_nodes, "SPAN", { class: true });
			var span0_nodes = children(span0);
			t3 = claim_text(span0_nodes, "feedback loops");
			span0_nodes.forEach(detach_dev);
			t4 = claim_text(h2_nodes, "\n    orientados a la aportación continua de\n    ");
			span1 = claim_element(h2_nodes, "SPAN", { class: true });
			var span1_nodes = children(span1);
			t5 = claim_text(span1_nodes, "valor");
			span1_nodes.forEach(detach_dev);
			h2_nodes.forEach(detach_dev);
			div_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h1, "class", " courier f1-ns f-subheadline-l lh-title-l mb0");
			add_location(h1, file$1, 9, 4, 103);
			attr_dev(a, "href", ".");
			attr_dev(a, "class", "svelte-7mn6z7");
			add_location(a, file$1, 8, 2, 86);
			attr_dev(span0, "class", " lookhere");
			add_location(span0, file$1, 14, 4, 251);
			attr_dev(span1, "class", " lookhere");
			add_location(span1, file$1, 16, 4, 344);
			attr_dev(h2, "class", "fw3 f3-ns f2-l mt2");
			add_location(h2, file$1, 12, 2, 185);
			attr_dev(div, "class", "pa1 w-80 ");
			attr_dev(div, "id", "title");
			add_location(div, file$1, 6, 0, 48);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div, anchor);
			append_dev(div, a);
			append_dev(a, h1);
			append_dev(h1, t0);
			append_dev(div, t1);
			append_dev(div, h2);
			append_dev(h2, t2);
			append_dev(h2, span0);
			append_dev(span0, t3);
			append_dev(h2, t4);
			append_dev(h2, span1);
			append_dev(span1, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$1.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$1($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("_1_Title", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<_1_Title> was created with unknown prop '${key}'`);
	});

	return [];
}

class _1_Title extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "_1_Title",
			options,
			id: create_fragment$1.name
		});
	}
}

/* src/components/2-Why.svelte generated by Svelte v3.26.0 */

const file$2 = "src/components/2-Why.svelte";

function create_fragment$2(ctx) {
	let div1;
	let h3;
	let t0;
	let t1;
	let section;
	let div0;
	let t2;
	let p;
	let t3;
	let mark;
	let t4;
	let t5;

	const block = {
		c: function create() {
			div1 = element("div");
			h3 = element("h3");
			t0 = text("¿Para qué?");
			t1 = space();
			section = element("section");
			div0 = element("div");
			t2 = text("La mayoría de modelos de escalado Agile requieren que todos los equipos\n      trabajen bajo el mismo framework o método.\n      ");
			p = element("p");
			t3 = text("El propósito de Ant Hill es\n        ");
			mark = element("mark");
			t4 = text("respetar como trabajan los equipos");
			t5 = text("\n        y establecer canales de comunicación para la sincronización y\n        alineamiento de la organización");
			this.h();
		},
		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { id: true });
			var div1_nodes = children(div1);
			h3 = claim_element(div1_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t0 = claim_text(h3_nodes, "¿Para qué?");
			h3_nodes.forEach(detach_dev);
			t1 = claim_space(div1_nodes);
			section = claim_element(div1_nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			t2 = claim_text(div0_nodes, "La mayoría de modelos de escalado Agile requieren que todos los equipos\n      trabajen bajo el mismo framework o método.\n      ");
			p = claim_element(div0_nodes, "P", {});
			var p_nodes = children(p);
			t3 = claim_text(p_nodes, "El propósito de Ant Hill es\n        ");
			mark = claim_element(p_nodes, "MARK", {});
			var mark_nodes = children(mark);
			t4 = claim_text(mark_nodes, "respetar como trabajan los equipos");
			mark_nodes.forEach(detach_dev);
			t5 = claim_text(p_nodes, "\n        y establecer canales de comunicación para la sincronización y\n        alineamiento de la organización");
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			attr_dev(h3, "class", " f2 lh-copy courier mb0");
			add_location(h3, file$2, 1, 2, 17);
			add_location(mark, file$2, 10, 8, 353);
			add_location(p, file$2, 8, 6, 305);
			attr_dev(div0, "class", "fl w-100 w-100-m w-100-l f3-l f4-ns ");
			add_location(div0, file$2, 5, 4, 121);
			attr_dev(section, "class", "cf pa3 mt0 pt0 fw3 w-80-l");
			add_location(section, file$2, 3, 2, 72);
			attr_dev(div1, "id", "why");
			add_location(div1, file$2, 0, 0, 0);
		},
		m: function mount(target, anchor) {
			insert_dev(target, div1, anchor);
			append_dev(div1, h3);
			append_dev(h3, t0);
			append_dev(div1, t1);
			append_dev(div1, section);
			append_dev(section, div0);
			append_dev(div0, t2);
			append_dev(div0, p);
			append_dev(p, t3);
			append_dev(p, mark);
			append_dev(mark, t4);
			append_dev(p, t5);
		},
		p: noop,
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(div1);
		}
	};

	dispatch_dev("SvelteRegisterBlock", {
		block,
		id: create_fragment$2.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance$2($$self, $$props) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("_2_Why", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<_2_Why> was created with unknown prop '${key}'`);
	});

	return [];
}

class _2_Why extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "_2_Why",
			options,
			id: create_fragment$2.name
		});
	}
}

export { _1_Title as _, _99_Credits as a, _2_Why as b };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi1XaHkuNmE1YTNhODYuanMiLCJzb3VyY2VzIjpbXSwic291cmNlc0NvbnRlbnQiOltdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
