import { S as SvelteComponentDev, i as init, s as safe_not_equal, d as dispatch_dev, v as validate_slots, e as element, a as space, o as create_component, t as text, q as query_selector_all, c as claim_element, g as detach_dev, h as claim_space, p as claim_component, b as children, f as claim_text, k as attr_dev, j as add_location, m as append_dev, l as insert_dev, r as mount_component, F as set_data_dev, u as transition_in, w as transition_out, x as destroy_component } from './client.d37f0a3f.js';
import { _ as _99_Credits, N as Navbar } from './99-Credits.494646a3.js';
import { f as findPost, N as Nav_horizontal } from './posts.73687b5a.js';

/* src/routes/blog/[permalink].svelte generated by Svelte v3.28.0 */
const file = "src/routes/blog/[permalink].svelte";

function create_fragment(ctx) {
	let title_value;
	let meta0;
	let meta0_content_value;
	let meta1;
	let meta1_content_value;
	let meta2;
	let meta2_content_value;
	let t0;
	let navhorizontal;
	let t1;
	let main;
	let div1;
	let div0;
	let h1;
	let t2_value = /*post*/ ctx[0].title + "";
	let t2;
	let t3;
	let h3;
	let t4_value = /*post*/ ctx[0].description + "";
	let t4;
	let t5;
	let p;
	let t6_value = /*dateTransformer*/ ctx[1](/*post*/ ctx[0].date) + "";
	let t6;
	let t7;
	let div2;
	let raw_value = /*post*/ ctx[0].html + "";
	let t8;
	let credits;
	let current;
	document.title = title_value = "Blog | " + /*post*/ ctx[0].title;
	navhorizontal = new Nav_horizontal({ $$inline: true });
	credits = new _99_Credits({ $$inline: true });

	const block = {
		c: function create() {
			meta0 = element("meta");
			meta1 = element("meta");
			meta2 = element("meta");
			t0 = space();
			create_component(navhorizontal.$$.fragment);
			t1 = space();
			main = element("main");
			div1 = element("div");
			div0 = element("div");
			h1 = element("h1");
			t2 = text(t2_value);
			t3 = space();
			h3 = element("h3");
			t4 = text(t4_value);
			t5 = space();
			p = element("p");
			t6 = text(t6_value);
			t7 = space();
			div2 = element("div");
			t8 = space();
			create_component(credits.$$.fragment);
			this.h();
		},
		l: function claim(nodes) {
			const head_nodes = query_selector_all("[data-svelte=\"svelte-1eiyz83\"]", document.head);
			meta0 = claim_element(head_nodes, "META", { property: true, content: true });
			meta1 = claim_element(head_nodes, "META", { name: true, content: true });
			meta2 = claim_element(head_nodes, "META", { property: true, content: true });
			head_nodes.forEach(detach_dev);
			t0 = claim_space(nodes);
			claim_component(navhorizontal.$$.fragment, nodes);
			t1 = claim_space(nodes);
			main = claim_element(nodes, "MAIN", { class: true });
			var main_nodes = children(main);
			div1 = claim_element(main_nodes, "DIV", { class: true });
			var div1_nodes = children(div1);
			div0 = claim_element(div1_nodes, "DIV", { class: true });
			var div0_nodes = children(div0);
			h1 = claim_element(div0_nodes, "H1", { class: true });
			var h1_nodes = children(h1);
			t2 = claim_text(h1_nodes, t2_value);
			h1_nodes.forEach(detach_dev);
			t3 = claim_space(div0_nodes);
			h3 = claim_element(div0_nodes, "H3", { class: true });
			var h3_nodes = children(h3);
			t4 = claim_text(h3_nodes, t4_value);
			h3_nodes.forEach(detach_dev);
			t5 = claim_space(div0_nodes);
			p = claim_element(div0_nodes, "P", { class: true });
			var p_nodes = children(p);
			t6 = claim_text(p_nodes, t6_value);
			p_nodes.forEach(detach_dev);
			div0_nodes.forEach(detach_dev);
			div1_nodes.forEach(detach_dev);
			t7 = claim_space(main_nodes);
			div2 = claim_element(main_nodes, "DIV", { class: true });
			var div2_nodes = children(div2);
			div2_nodes.forEach(detach_dev);
			main_nodes.forEach(detach_dev);
			t8 = claim_space(nodes);
			claim_component(credits.$$.fragment, nodes);
			this.h();
		},
		h: function hydrate() {
			attr_dev(meta0, "property", "og:title");
			attr_dev(meta0, "content", meta0_content_value = /*post*/ ctx[0].title);
			add_location(meta0, file, 65, 2, 1387);
			attr_dev(meta1, "name", "description");
			attr_dev(meta1, "content", meta1_content_value = /*post*/ ctx[0].description);
			add_location(meta1, file, 66, 2, 1439);
			attr_dev(meta2, "property", "og:description");
			attr_dev(meta2, "content", meta2_content_value = /*post*/ ctx[0].description);
			add_location(meta2, file, 68, 2, 1497);
			attr_dev(h1, "class", "f4-m");
			add_location(h1, file, 77, 6, 1763);
			attr_dev(h3, "class", "tl w-90 f4-m");
			add_location(h3, file, 78, 6, 1804);
			attr_dev(p, "class", " ma1 pb2 pt2 pr2 tr f6 gray lh-copy courier");
			add_location(p, file, 79, 6, 1859);
			attr_dev(div0, "class", " mb0 ph3 pt3 intro");
			add_location(div0, file, 76, 4, 1724);
			attr_dev(div1, "class", " center post-card w-70-ns w-90-m w-100 shadow-4 br3 mt3 svelte-sdjn16");
			add_location(div1, file, 73, 2, 1619);
			attr_dev(div2, "class", "center w-90-l w-100-m w-100 br3 pt4 bt-grey");
			add_location(div2, file, 85, 2, 1986);
			attr_dev(main, "class", "sections");
			add_location(main, file, 71, 0, 1592);
		},
		m: function mount(target, anchor) {
			append_dev(document.head, meta0);
			append_dev(document.head, meta1);
			append_dev(document.head, meta2);
			insert_dev(target, t0, anchor);
			mount_component(navhorizontal, target, anchor);
			insert_dev(target, t1, anchor);
			insert_dev(target, main, anchor);
			append_dev(main, div1);
			append_dev(div1, div0);
			append_dev(div0, h1);
			append_dev(h1, t2);
			append_dev(div0, t3);
			append_dev(div0, h3);
			append_dev(h3, t4);
			append_dev(div0, t5);
			append_dev(div0, p);
			append_dev(p, t6);
			append_dev(main, t7);
			append_dev(main, div2);
			div2.innerHTML = raw_value;
			insert_dev(target, t8, anchor);
			mount_component(credits, target, anchor);
			current = true;
		},
		p: function update(ctx, [dirty]) {
			if ((!current || dirty & /*post*/ 1) && title_value !== (title_value = "Blog | " + /*post*/ ctx[0].title)) {
				document.title = title_value;
			}

			if (!current || dirty & /*post*/ 1 && meta0_content_value !== (meta0_content_value = /*post*/ ctx[0].title)) {
				attr_dev(meta0, "content", meta0_content_value);
			}

			if (!current || dirty & /*post*/ 1 && meta1_content_value !== (meta1_content_value = /*post*/ ctx[0].description)) {
				attr_dev(meta1, "content", meta1_content_value);
			}

			if (!current || dirty & /*post*/ 1 && meta2_content_value !== (meta2_content_value = /*post*/ ctx[0].description)) {
				attr_dev(meta2, "content", meta2_content_value);
			}

			if ((!current || dirty & /*post*/ 1) && t2_value !== (t2_value = /*post*/ ctx[0].title + "")) set_data_dev(t2, t2_value);
			if ((!current || dirty & /*post*/ 1) && t4_value !== (t4_value = /*post*/ ctx[0].description + "")) set_data_dev(t4, t4_value);
			if ((!current || dirty & /*post*/ 1) && t6_value !== (t6_value = /*dateTransformer*/ ctx[1](/*post*/ ctx[0].date) + "")) set_data_dev(t6, t6_value);
			if ((!current || dirty & /*post*/ 1) && raw_value !== (raw_value = /*post*/ ctx[0].html + "")) div2.innerHTML = raw_value;		},
		i: function intro(local) {
			if (current) return;
			transition_in(navhorizontal.$$.fragment, local);
			transition_in(credits.$$.fragment, local);
			current = true;
		},
		o: function outro(local) {
			transition_out(navhorizontal.$$.fragment, local);
			transition_out(credits.$$.fragment, local);
			current = false;
		},
		d: function destroy(detaching) {
			detach_dev(meta0);
			detach_dev(meta1);
			detach_dev(meta2);
			if (detaching) detach_dev(t0);
			destroy_component(navhorizontal, detaching);
			if (detaching) detach_dev(t1);
			if (detaching) detach_dev(main);
			if (detaching) detach_dev(t8);
			destroy_component(credits, detaching);
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

function preload(page) {
	// find the post based on the permalink param
	const post = findPost(page.params.permalink);

	// return a list of props
	return { post };
}

function instance($$self, $$props, $$invalidate) {
	let { $$slots: slots = {}, $$scope } = $$props;
	validate_slots("U5Bpermalinku5D", slots, []);
	let { post } = $$props;

	const dateTransformer = inputDate => {
		let arrayDate = inputDate.split("/");
		let reverseDate = arrayDate.reverse();
		let dia = arrayDate[2];

		let mes = arrayDate[1] == 0
		? arrayDate[1].substring(1)
		: arrayDate[1];

		let año = arrayDate[0];

		const arrayMeses = [
			"ene",
			"feb",
			"mar",
			"abr",
			"may",
			"jun",
			"jul",
			"ago",
			"sept",
			"oct",
			"nov",
			"dic"
		];

		return `${dia} ${arrayMeses[mes - 1]}. ${año == new Date().getFullYear() ? "" : año}`;
	};

	const writable_props = ["post"];

	Object.keys($$props).forEach(key => {
		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<U5Bpermalinku5D> was created with unknown prop '${key}'`);
	});

	$$self.$$set = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	$$self.$capture_state = () => ({
		Navbar,
		findPost,
		preload,
		NavHorizontal: Nav_horizontal,
		post,
		Credits: _99_Credits,
		dateTransformer
	});

	$$self.$inject_state = $$props => {
		if ("post" in $$props) $$invalidate(0, post = $$props.post);
	};

	if ($$props && "$$inject" in $$props) {
		$$self.$inject_state($$props.$$inject);
	}

	return [post, dateTransformer];
}

class U5Bpermalinku5D extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, { post: 0 });

		dispatch_dev("SvelteRegisterComponent", {
			component: this,
			tagName: "U5Bpermalinku5D",
			options,
			id: create_fragment.name
		});

		const { ctx } = this.$$;
		const props = options.props || {};

		if (/*post*/ ctx[0] === undefined && !("post" in props)) {
			console.warn("<U5Bpermalinku5D> was created without expected prop 'post'");
		}
	}

	get post() {
		throw new Error("<U5Bpermalinku5D>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set post(value) {
		throw new Error("<U5Bpermalinku5D>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export default U5Bpermalinku5D;
export { preload };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiW3Blcm1hbGlua10uZmRlMjg2M2IuanMiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYmxvZy9bcGVybWFsaW5rXS5zdmVsdGUiXSwic291cmNlc0NvbnRlbnQiOlsiPHNjcmlwdCBjb250ZXh0PVwibW9kdWxlXCI+XG5cdGltcG9ydCBOYXZiYXIgZnJvbSAnLi8uLi8uLi9jb21wb25lbnRzL05hdmJhci5zdmVsdGUnO1xuICAvLyBpbXBvcnQgdGhlIGxvZ2ljIGZvciBmaW5kaW5nIGEgcG9zdCBiYXNlZCBvbiBwZXJtYWxpbmtcbiAgaW1wb3J0IHsgZmluZFBvc3QgfSBmcm9tIFwiLi4vLi4vcG9zdHNcIjtcblxuICAvLyBzYXBwZXIgY2FsbHMgdGhpcyB0byBsb2FkIG91ciBkYXRhXG4gIGV4cG9ydCBmdW5jdGlvbiBwcmVsb2FkKHBhZ2UpIHtcbiAgICAvLyBmaW5kIHRoZSBwb3N0IGJhc2VkIG9uIHRoZSBwZXJtYWxpbmsgcGFyYW1cbiAgICBjb25zdCBwb3N0ID0gZmluZFBvc3QocGFnZS5wYXJhbXMucGVybWFsaW5rKTtcblxuICAgIC8vIHJldHVybiBhIGxpc3Qgb2YgcHJvcHNcbiAgICByZXR1cm4geyBwb3N0IH07XG4gIH1cbjwvc2NyaXB0PlxuXG5cblxuPHNjcmlwdD5cbmltcG9ydCBOYXZIb3Jpem9udGFsIGZyb20gJy4vLi4vLi4vY29tcG9uZW50cy9OYXYtaG9yaXpvbnRhbC5zdmVsdGUnO1xuICAvLyB0aGlzIHByb3AgaXMgZmlsbGVkIGZyb20gdGhlIHJlc3VsdCBvZiB0aGUgYHByZWxvYWQoKWBcbiAgZXhwb3J0IGxldCBwb3N0O1xuXG4gIGltcG9ydCBDcmVkaXRzIGZyb20gXCIuLy4uLy4uL2NvbXBvbmVudHMvOTktQ3JlZGl0cy5zdmVsdGVcIjtcblxuXG4gIGNvbnN0IGRhdGVUcmFuc2Zvcm1lciA9IGlucHV0RGF0ZSA9PiB7XG4gICAgbGV0IGFycmF5RGF0ZSA9IGlucHV0RGF0ZS5zcGxpdChcIi9cIik7XG4gICAgbGV0IHJldmVyc2VEYXRlID0gYXJyYXlEYXRlLnJldmVyc2UoKTtcbiAgICBsZXQgZGlhID0gYXJyYXlEYXRlWzJdO1xuICAgIGxldCBtZXMgPSBhcnJheURhdGVbMV0gPT0gMCA/IGFycmF5RGF0ZVsxXS5zdWJzdHJpbmcoMSkgOiBhcnJheURhdGVbMV07XG4gICAgbGV0IGHDsW8gPSBhcnJheURhdGVbMF07XG5cbiAgICBjb25zdCBhcnJheU1lc2VzID0gW1xuICAgICAgXCJlbmVcIixcbiAgICAgIFwiZmViXCIsXG4gICAgICBcIm1hclwiLFxuICAgICAgXCJhYnJcIixcbiAgICAgIFwibWF5XCIsXG4gICAgICBcImp1blwiLFxuICAgICAgXCJqdWxcIixcbiAgICAgIFwiYWdvXCIsXG4gICAgICBcInNlcHRcIixcbiAgICAgIFwib2N0XCIsXG4gICAgICBcIm5vdlwiLFxuICAgICAgXCJkaWNcIlxuICAgIF07XG4gICAgcmV0dXJuIGAke2RpYX0gJHthcnJheU1lc2VzW21lcyAtIDFdfS4gJHtcbiAgICAgIGHDsW8gPT0gbmV3IERhdGUoKS5nZXRGdWxsWWVhcigpID8gXCJcIiA6IGHDsW9cbiAgICB9YDtcbiAgfTtcbjwvc2NyaXB0PlxuXG48c3R5bGU+XG4gIC5wb3N0LWNhcmQge1xuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgIG1pbi1oZWlnaHQ6IDh2aDtcbiAgfVxuXG4gIGludHJve1xuICAgIG1hcmdpbi10b3A6IDZyZW07XG4gIH1cbjwvc3R5bGU+XG5cbjxzdmVsdGU6aGVhZD5cbiAgPHRpdGxlPkJsb2cgfCB7cG9zdC50aXRsZX08L3RpdGxlPlxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cG9zdC50aXRsZX0gLz5cbiAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5kZXNjcmlwdGlvbn0gLz5cblxuICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17cG9zdC5kZXNjcmlwdGlvbn0gLz5cbjwvc3ZlbHRlOmhlYWQ+XG48TmF2SG9yaXpvbnRhbCAvPlxuPG1haW4gY2xhc3M9XCJzZWN0aW9uc1wiPlxuXG4gIDxkaXYgY2xhc3M9XCIgY2VudGVyIHBvc3QtY2FyZCB3LTcwLW5zIHctOTAtbSB3LTEwMCBzaGFkb3ctNCBicjMgbXQzXCI+XG5cbiAgICA8IS0tIGRpc3BsYXkgdGhlIHBvc3QgLS0+XG4gICAgPGRpdiBjbGFzcz1cIiBtYjAgcGgzIHB0MyBpbnRyb1wiPlxuICAgICAgPGgxIGNsYXNzPVwiZjQtbVwiPntwb3N0LnRpdGxlfTwvaDE+XG4gICAgICA8aDMgY2xhc3M9XCJ0bCB3LTkwIGY0LW1cIj57cG9zdC5kZXNjcmlwdGlvbn08L2gzPlxuICAgICAgPHAgY2xhc3M9XCIgbWExIHBiMiBwdDIgcHIyIHRyIGY2IGdyYXkgbGgtY29weSBjb3VyaWVyXCI+XG4gICAgICAgIHtkYXRlVHJhbnNmb3JtZXIocG9zdC5kYXRlKX1cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImNlbnRlciB3LTkwLWwgdy0xMDAtbSB3LTEwMCBicjMgcHQ0IGJ0LWdyZXlcIj5cbiAgICB7QGh0bWwgcG9zdC5odG1sfVxuICA8L2Rpdj5cblxuPC9tYWluPlxuXG48Q3JlZGl0cyAvPlxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7eUJBNkV3QixHQUFJLElBQUMsS0FBSzs7Ozt5QkFDRixHQUFJLElBQUMsV0FBVzs7OztvQ0FFdkMsR0FBZSxhQUFDLEdBQUksSUFBQyxJQUFJOzs7OzBCQU12QixHQUFJLElBQUMsSUFBSTs7OztxREF0QkgsR0FBSSxJQUFDLEtBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZEQUNVLEdBQUksSUFBQyxLQUFLOzs7NkRBQ1gsR0FBSSxJQUFDLFdBQVc7Ozs2REFFVCxHQUFJLElBQUMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsrRkFKMUMsR0FBSSxJQUFDLEtBQUs7Ozs7aUdBQ1UsR0FBSSxJQUFDLEtBQUs7Ozs7aUdBQ1gsR0FBSSxJQUFDLFdBQVc7Ozs7aUdBRVQsR0FBSSxJQUFDLFdBQVc7Ozs7NkVBU25DLEdBQUksSUFBQyxLQUFLOzZFQUNGLEdBQUksSUFBQyxXQUFXO3dGQUV2QyxHQUFlLGFBQUMsR0FBSSxJQUFDLElBQUk7K0VBTXZCLEdBQUksSUFBQyxJQUFJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FoRkYsT0FBTyxDQUFDLElBQUk7O09BRXBCLElBQUksR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTOzs7VUFHbEMsSUFBSTs7Ozs7O09BU0osSUFBSTs7T0FLVCxlQUFlLEdBQUcsU0FBUztNQUMzQixTQUFTLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHO01BQy9CLFdBQVcsR0FBRyxTQUFTLENBQUMsT0FBTztNQUMvQixHQUFHLEdBQUcsU0FBUyxDQUFDLENBQUM7O01BQ2pCLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFBRyxTQUFTLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQUksU0FBUyxDQUFDLENBQUM7O01BQ2pFLEdBQUcsR0FBRyxTQUFTLENBQUMsQ0FBQzs7UUFFZixVQUFVO0dBQ2QsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLO0dBQ0wsS0FBSztHQUNMLEtBQUs7R0FDTCxNQUFNO0dBQ04sS0FBSztHQUNMLEtBQUs7R0FDTCxLQUFLOzs7WUFFRyxHQUFHLElBQUksVUFBVSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQ2pDLEdBQUcsUUFBUSxJQUFJLEdBQUcsV0FBVyxLQUFLLEVBQUUsR0FBRyxHQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=