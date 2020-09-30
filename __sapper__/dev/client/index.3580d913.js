import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, t as text, a as space, c as claim_element, b as children, f as claim_text, g as detach_dev, h as claim_space, j as attr_dev, k as add_location, l as insert_dev, m as append_dev, n as noop, o as create_component, q as query_selector_all, p as claim_component, r as mount_component, u as transition_in, w as transition_out, x as destroy_component } from './client.d9756172.js';
import { _ as _1_Title } from './1-Title.b9553041.js';
import { _ as _99_Credits } from './99-Credits.ee645ee3.js';

/* src/components/2-Why.svelte generated by Svelte v3.28.0 */

const file = "src/components/2-Why.svelte";

function create_fragment(ctx) {
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
			add_location(h3, file, 1, 2, 17);
			add_location(mark, file, 10, 8, 352);
			add_location(p, file, 8, 6, 304);
			attr_dev(div0, "class", "fl w-100 w-100-m w-90-l f3-l f4-ns ");
			add_location(div0, file, 5, 4, 121);
			attr_dev(section, "class", "cf pa3 mt0 pt0 fw3 w-75-l");
			add_location(section, file, 3, 2, 72);
			attr_dev(div1, "id", "why");
			add_location(div1, file, 0, 0, 0);
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
		id: create_fragment.name,
		type: "component",
		source: "",
		ctx
	});

	return block;
}

function instance($$self, $$props) {
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
		init(this, options, instance, create_fragment, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "_2_Why",
			options,
			id: create_fragment.name
		});
	}
}

/* src/components/Accesos.svelte generated by Svelte v3.28.0 */

const file$1 = "src/components/Accesos.svelte";

function create_fragment$1(ctx) {
	let section;
	let div0;
	let a0;
	let img0;
	let img0_src_value;
	let a0_aria_current_value;
	let t0;
	let br0;
	let t1;
	let a1;
	let h20;
	let t2;
	let a1_aria_current_value;
	let t3;
	let div1;
	let a2;
	let img1;
	let img1_src_value;
	let t4;
	let br1;
	let t5;
	let a3;
	let h21;
	let t6;

	const block = {
		c: function create() {
			section = element("section");
			div0 = element("div");
			a0 = element("a");
			img0 = element("img");
			t0 = space();
			br0 = element("br");
			t1 = space();
			a1 = element("a");
			h20 = element("h2");
			t2 = text("Leer Online");
			t3 = space();
			div1 = element("div");
			a2 = element("a");
			img1 = element("img");
			t4 = space();
			br1 = element("br");
			t5 = space();
			a3 = element("a");
			h21 = element("h2");
			t6 = text("Descargar PDF");
			this.h();
		},
		l: function claim(nodes) {
			section = claim_element(nodes, "SECTION", { class: true });
			var section_nodes = children(section);
			div0 = claim_element(section_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);

			a0 = claim_element(div0_nodes, "A", {
				"aria-current": true,
				href: true,
				class: true
			});

			var a0_nodes = children(a0);
			img0 = claim_element(a0_nodes, "IMG", { src: true, alt: true, class: true });
			a0_nodes.forEach(detach_dev);
			t0 = claim_space(div0_nodes);
			br0 = claim_element(div0_nodes, "BR", {});
			t1 = claim_space(div0_nodes);

			a1 = claim_element(div0_nodes, "A", {
				"aria-current": true,
				href: true,
				class: true
			});

			var a1_nodes = children(a1);
			h20 = claim_element(a1_nodes, "H2", {});
			var h20_nodes = children(h20);
			t2 = claim_text(h20_nodes, "Leer Online");
			h20_nodes.forEach(detach_dev);
			a1_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			t3 = claim_space(section_nodes);
			div1 = claim_element(section_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			a2 = claim_element(div1_nodes, "A", { href: true, class: true, target: true });
			var a2_nodes = children(a2);

			img1 = claim_element(a2_nodes, "IMG", {
				src: true,
				alt: true,
				class: true,
				id: true
			});

			a2_nodes.forEach(detach_dev);
			t4 = claim_space(div1_nodes);
			br1 = claim_element(div1_nodes, "BR", {});
			t5 = claim_space(div1_nodes);
			a3 = claim_element(div1_nodes, "A", { href: true, target: true, class: true });
			var a3_nodes = children(a3);
			h21 = claim_element(a3_nodes, "H2", {});
			var h21_nodes = children(h21);
			t6 = claim_text(h21_nodes, "Descargar PDF");
			h21_nodes.forEach(detach_dev);
			a3_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			section_nodes.forEach(detach_dev);
			this.h();
		},
		h: function hydrate() {
			if (img0.src !== (img0_src_value = /*leer*/ ctx[2])) attr_dev(img0, "src", img0_src_value);
			attr_dev(img0, "alt", "why gif");
			attr_dev(img0, "class", "img-svg");
			add_location(img0, file$1, 21, 6, 411);
			attr_dev(a0, "aria-current", a0_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined);
			attr_dev(a0, "href", "guia");
			attr_dev(a0, "class", "dim svelte-7mn6z7");
			add_location(a0, file$1, 17, 4, 304);
			add_location(br0, file$1, 23, 4, 473);
			add_location(h20, file$1, 25, 6, 561);
			attr_dev(a1, "aria-current", a1_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined);
			attr_dev(a1, "href", "guia");
			attr_dev(a1, "class", "svelte-7mn6z7");
			add_location(a1, file$1, 24, 4, 484);
			attr_dev(div0, "class", " dib pa2 mh4 tc");
			add_location(div0, file$1, 16, 2, 270);
			if (img1.src !== (img1_src_value = /*documento*/ ctx[3])) attr_dev(img1, "src", img1_src_value);
			attr_dev(img1, "alt", "Descargar PDF");
			attr_dev(img1, "class", "img-svg");
			attr_dev(img1, "id", "descargar_pdf_home");
			add_location(img1, file$1, 32, 6, 719);
			attr_dev(a2, "href", /*pdfVersion*/ ctx[1]);
			attr_dev(a2, "class", "dim svelte-7mn6z7");
			attr_dev(a2, "target", "_blank");
			add_location(a2, file$1, 31, 4, 663);
			add_location(br1, file$1, 38, 4, 848);
			add_location(h21, file$1, 40, 6, 903);
			attr_dev(a3, "href", /*pdfVersion*/ ctx[1]);
			attr_dev(a3, "target", "_blank");
			attr_dev(a3, "class", "svelte-7mn6z7");
			add_location(a3, file$1, 39, 4, 859);
			attr_dev(div1, "class", " dib pa2 mh4 tc ");
			add_location(div1, file$1, 30, 2, 628);
			attr_dev(section, "class", "tc tl-l");
			add_location(section, file$1, 13, 0, 218);
		},
		m: function mount(target, anchor) {
			insert_dev(target, section, anchor);
			append_dev(section, div0);
			append_dev(div0, a0);
			append_dev(a0, img0);
			append_dev(div0, t0);
			append_dev(div0, br0);
			append_dev(div0, t1);
			append_dev(div0, a1);
			append_dev(a1, h20);
			append_dev(h20, t2);
			append_dev(section, t3);
			append_dev(section, div1);
			append_dev(div1, a2);
			append_dev(a2, img1);
			append_dev(div1, t4);
			append_dev(div1, br1);
			append_dev(div1, t5);
			append_dev(div1, a3);
			append_dev(a3, h21);
			append_dev(h21, t6);
		},
		p: function update(ctx, [dirty]) {
			if (dirty & /*segment*/ 1 && a0_aria_current_value !== (a0_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined)) {
				attr_dev(a0, "aria-current", a0_aria_current_value);
			}

			if (dirty & /*segment*/ 1 && a1_aria_current_value !== (a1_aria_current_value = /*segment*/ ctx[0] === "guia" ? "page" : undefined)) {
				attr_dev(a1, "aria-current", a1_aria_current_value);
			}
		},
		i: noop,
		o: noop,
		d: function destroy(detaching) {
			if (detaching) detach_dev(section);
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

function instance$1($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Accesos", slots, []);
	let { segment } = $$props;
	let pdfVersion = "./descargas/Ant Hill Framework.pdf";
	let leer = "./gif/Ojo.svg";
	let documento = "./gif/Documento.svg";
	const writable_props = ["segment"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Accesos> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
	};

	$$self.$capture_state = () => ({ segment, pdfVersion, leer, documento });

	$$self.$inject_state = $$props => {
		if ("segment" in $$props) $$invalidate(0, segment = $$props.segment);
		if ("pdfVersion" in $$props) $$invalidate(1, pdfVersion = $$props.pdfVersion);
		if ("leer" in $$props) $$invalidate(2, leer = $$props.leer);
		if ("documento" in $$props) $$invalidate(3, documento = $$props.documento);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [segment, pdfVersion, leer, documento];
}

class Accesos extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, { segment: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Accesos",
			options,
			id: create_fragment$1.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*segment*/ ctx[0] === undefined && !("segment" in props)) {
			console.warn("<Accesos> was created without expected prop 'segment'");
		}
	}

	get segment() {
		throw new Error("<Accesos>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set segment(value) {
		throw new Error("<Accesos>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/routes/index.svelte generated by Svelte v3.28.0 */
const file$2 = "src/routes/index.svelte";

function create_fragment$2(ctx) {
	let t0;
	let main;
	let title;
	let t1;
	let why;
	let t2;
	let accesos;
	let t3;
	let credits;
	let current;
	title = new _1_Title({ $$inline: true });
	why = new _2_Why({ $$inline: true });
	accesos = new Accesos({ $$inline: true });
	credits = new _99_Credits({ $$inline: true });

	const block = {
		c: function create() {
			t0 = space();
			main = element("main");
			create_component(title.$$.fragment);
			t1 = space();
			create_component(why.$$.fragment);
			t2 = space();
			create_component(accesos.$$.fragment);
			t3 = space();
			create_component(credits.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-8fet6w\"]", document.head);
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			claim_component(title.$$.fragment, main_nodes);
			t1 = claim_space(main_nodes);
			claim_component(why.$$.fragment, main_nodes);
			t2 = claim_space(main_nodes);
			claim_component(accesos.$$.fragment, main_nodes);
			main_nodes.forEach(detach_dev);
			t3 = claim_space(nodes);
			claim_component(credits.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			document.title = "Inicio";
			attr_dev(main, "class", "sections  svelte-z1pa2y");
			add_location(main, file$2, 34, 0, 668);
		},
		m: function mount(target, anchor) {
			insert_dev(target, t0, anchor);
			insert_dev(target, main, anchor);
			mount_component(title, main, null);
			append_dev(main, t1);
			mount_component(why, main, null);
			append_dev(main, t2);
			mount_component(accesos, main, null);
			insert_dev(target, t3, anchor);
			mount_component(credits, target, anchor);
			current = true;
		},
		p: noop,
		i: function intro(local) {
			if (current) return;
			transition_in(title.$$.fragment, local);
			transition_in(why.$$.fragment, local);
			transition_in(accesos.$$.fragment, local);
			transition_in(credits.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(title.$$.fragment, local);
			transition_out(why.$$.fragment, local);
			transition_out(accesos.$$.fragment, local);
			transition_out(credits.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			if (detaching) detach_dev(t0);
			if (detaching) detach_dev(main);
			destroy_component(title);
			destroy_component(why);
			destroy_component(accesos);
			if (detaching) detach_dev(t3);
			destroy_component(credits, detaching);
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

function instance$2($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("Routes", slots, []);
	const writable_props = [];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<Routes> was created with unknown prop '${key}'`);
	});

	$$self.$capture_state = () => ({ Title: _1_Title, Why: _2_Why, Accesos, Credits: _99_Credits });
	return [];
}

class Routes extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$2, create_fragment$2, safe_not_equal, {});

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "Routes",
			options,
			id: create_fragment$2.name
		});
	}
}

export default Routes;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguMzU4MGQ5MTMuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0FjY2Vzb3Muc3ZlbHRlIl0sInNvdXJjZXNDb250ZW50IjpbIjxzY3JpcHQ+XG4gIGV4cG9ydCBsZXQgc2VnbWVudDtcbiAgbGV0IHBkZlZlcnNpb24gPSBcIi4vZGVzY2FyZ2FzL0FudCBIaWxsIEZyYW1ld29yay5wZGZcIjtcbiAgbGV0IGxlZXIgPSBcIi4vZ2lmL09qby5zdmdcIjtcbiAgbGV0IGRvY3VtZW50byA9IFwiLi9naWYvRG9jdW1lbnRvLnN2Z1wiO1xuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cbiAgYSB7XG4gICAgY29sb3I6ICMzMzMzMzM7XG4gIH1cbjwvc3R5bGU+XG5cbjxzZWN0aW9uIGNsYXNzPVwidGMgdGwtbFwiPlxuXG4gIDwhLS0gTGVlciBPbmxpbmUgLS0+XG4gIDxkaXYgY2xhc3M9XCIgZGliIHBhMiBtaDQgdGNcIj5cbiAgICA8YVxuICAgICAgYXJpYS1jdXJyZW50PXtzZWdtZW50ID09PSAnZ3VpYScgPyAncGFnZScgOiB1bmRlZmluZWR9XG4gICAgICBocmVmPVwiZ3VpYVwiXG4gICAgICBjbGFzcz1cImRpbVwiPlxuICAgICAgPGltZyBzcmM9e2xlZXJ9IGFsdD1cIndoeSBnaWZcIiBjbGFzcz1cImltZy1zdmdcIiAvPlxuICAgIDwvYT5cbiAgICA8YnIgLz5cbiAgICA8YSBhcmlhLWN1cnJlbnQ9e3NlZ21lbnQgPT09ICdndWlhJyA/ICdwYWdlJyA6IHVuZGVmaW5lZH0gaHJlZj1cImd1aWFcIj5cbiAgICAgIDxoMj5MZWVyIE9ubGluZTwvaDI+XG4gICAgPC9hPlxuICA8L2Rpdj5cblxuICA8IS0tIERlc2NhcmdhciBQREYgLS0+XG4gIDxkaXYgY2xhc3M9XCIgZGliIHBhMiBtaDQgdGMgXCI+XG4gICAgPGEgaHJlZj17cGRmVmVyc2lvbn0gY2xhc3M9XCJkaW1cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtkb2N1bWVudG99XG4gICAgICAgIGFsdD1cIkRlc2NhcmdhciBQREZcIlxuICAgICAgICBjbGFzcz1cImltZy1zdmdcIlxuICAgICAgICBpZD1cImRlc2Nhcmdhcl9wZGZfaG9tZVwiIC8+XG4gICAgPC9hPlxuICAgIDxiciAvPlxuICAgIDxhIGhyZWY9e3BkZlZlcnNpb259IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgPGgyPkRlc2NhcmdhciBQREY8L2gyPlxuICAgIDwvYT5cbiAgPC9kaXY+XG5cbjwvc2VjdGlvbj5cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrQ0FxQmdCLEdBQUk7Ozs7b0VBSEEsR0FBTyxRQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7O29FQU10QyxHQUFPLFFBQUssTUFBTSxHQUFHLE1BQU0sR0FBRyxTQUFTOzs7Ozs7b0RBUy9DLEdBQVM7Ozs7O3VDQUZULEdBQVU7Ozs7Ozt1Q0FRVixHQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrRkFyQkgsR0FBTyxRQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUzs7OzsrRkFNdEMsR0FBTyxRQUFLLE1BQU0sR0FBRyxNQUFNLEdBQUcsU0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztPQXZCL0MsT0FBTztLQUNkLFVBQVUsR0FBRyxvQ0FBb0M7S0FDakQsSUFBSSxHQUFHLGVBQWU7S0FDdEIsU0FBUyxHQUFHLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=
